const chatForm = document.getElementById('chatF');

//formulario de solicitud
const solicitarForm = document.getElementById('solicitar-form');



const chatMessages = document.querySelector('.chat-messages');

//reconocimiento de grupo y usuarios
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
//no funciona 
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});



const socket = io();

// username y room == undefine Error 
socket.emit('joinRoom', { username, room });
// Get room and users
socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users);
});

// Message from server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

console.log(chatF);
// Message submit
chatF.addEventListener('submit', e => {
    e.preventDefault();

    // Get message text
    let msg = e.target.elements.msg.value;

    msg = msg.trim();

    if (!msg) {
        return false;
    }

    // Emit message to server
    socket.emit('chatMessage', msg);

    // Clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

//cantidad submit
solicitarForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get message text
    const cantidad = e.target.elements.cantidad.value;

    //emit message to server
    socket.emit('solicitud', cantidad);

    //clear input
    e.target.elements.cantidad.value = '';
    e.target.elements.cantidad.focus();

});

//cantidad2 submit
/*enviarForm.addEventListener('submit', (e) => {
     e.preventDefault();

     //get message text
     const cantidad2 = e.target.elements.cantidad2.value;



     //emit message to server
     socket.emit('envio', cantidad2);

     //clear input
     e.target.elements.cantidad2.value = '';
     e.target.elements.cantidad2.focus();
});*/

// Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username;
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
    roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.username;
        userList.appendChild(li);
    });
}
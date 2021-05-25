window.onload = () => {

    document.getElementById("login-gerente").onclick = () => {
        console.log("inicio");
        //recoger los datos del formulario 

        let user = {};

        user.username = document.getElementById("username").value;

        user.room = document.getElementById("room").value;

        console.log(user);


        //crear el Json de la petición
        //peticion post: utilizar fetch
        fetch("/jugadores", {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(user)
            .then(function(data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function(error) {
                console.log('Request failed', error);
            });

        //validación de usuario


        //redirección
        window.location.assign("/Gerente.html")

    }


    
        //mecanico
        document.getElementById("login-mecanico").onclick = () => {
            console.log("inicio");
            //recoger los datos del formulario 

            let user = {};

            user.username = document.getElementById("username").value;

            user.room = document.getElementById("room").value;

            console.log(user);


            //crear el Json de la petición
            //peticion post: utilizar fetch
            fetch("/jugadores", {
                    method: 'post',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(user)
                .then(function(data) {
                    console.log('Request succeeded with JSON response', data);
                })
                .catch(function(error) {
                    console.log('Request failed', error);
                });

            //validación de usuario


            //redirección
            window.location.assign("/Mecanico.html")

        }

        //capitan

        document.getElementById("login-capitan").onclick = () => {
            console.log("inicio");
            //recoger los datos del formulario 

            let user = {};

            user.username = document.getElementById("username").value;

            user.room = document.getElementById("room").value;

            console.log(user);


            //crear el Json de la petición
            //peticion post: utilizar fetch
            fetch("/jugadores", {
                    method: 'post',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(user)
                .then(function(data) {
                    console.log('Request succeeded with JSON response', data);
                })
                .catch(function(error) {
                    console.log('Request failed', error);
                });

            //validación de usuario


            //redirección
           window.location.assign("/Capitan.html")

        }
    
};
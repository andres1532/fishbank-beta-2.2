//-----------------------------------------intento 1 funciona crear los barcos en la pos donde esta el mouse------------
/*let ship;

function setup() {
  createCanvas(1366 , 695);
}

function draw() {
  background(0, 100, 255);
  Port();
  Ship.keyTyped();
  Ship.Barco();
}

function Port() {
  //puerto
  fill(150, 10, 10);
  rect(0, 100, 80, 535);
  noStroke();

  //niveles
  //1
  fill(0, 100, 255);
  rect(35, 120, 50, 100);

  //2
  fill(0, 100, 255);
  rect(35, 250, 50, 100);

  //3
  fill(0, 100, 255);
  rect(35, 380, 50, 100);

  //4
  fill(0, 100, 255);
  rect(35, 510, 50, 100);
}

function keyTyped(){
  if (key === "p") {
    Barco();
    console.log("Barco");
  }
}

function Barco(){
  stroke(155);
  fill(50, 50, 50);
  ellipse(mouseX, mouseY, 20, 20);
}

class Ship{


}*/


//--------------------------------------------------intento 2 (seleccion y creacionde barco, funciona)---------------------------------------------------------

/*let ships = [];

function setup() {
  createCanvas(1366 , 695);
  let x = 50;
  let y = 150;
  let r = 10;
  let s = new Ship(x, y, r);
  ships.push(s);
}

function draw() {
  background(0, 100, 255);
  Port();
   
  for(let i = 0; i < ships.length; i++){
    ships[i].keyTyped();
  } 
}

function Port() {
  //puerto
  fill(150, 10, 10);
  rect(0, 100, 80, 535);
  noStroke();

  //niveles
  //1
  fill(0, 100, 255);
  rect(35, 120, 50, 100);

  //2
  fill(0, 100, 255);
  rect(35, 250, 50, 100);

  //3
  fill(0, 100, 255);
  rect(35, 380, 50, 100);

  //4
  fill(0, 100, 255);
  rect(35, 510, 50, 100);
}

function mousePressed(){

  for(let i = 0; i < ships.length; i++){
    ships[i].Clicked(mouseX, mouseY);
  }
}

class Ship{

  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = 255;
  }

  Clicked(px, py){
    let distance = dist(px, py, this.x, this.y)
    if(distance < this.r){
      this.color = 0;
      console.log("seleccion");
    } else {
      this.color = 255;
    }
  }

  keyTyped(){
    if (key === "p") {
      stroke(0);
      fill(this.color, 255, 0);//fill(50, 50, 50);
      ellipse(this.x, this.y, 20, 20);
      console.log("Barco");
    }
  }

}*/

//----------------------------------------------------------------- intento 3 (movimiento)--------------------------------------------
/*let ships = [];----
let posX;
let posY;
let vel = 0.05;
let overEllipse = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let x = 50;
let y = 150;

function setup() {
  createCanvas(1366 , 695);
  //posicion y tamaño inicial barco
  let x = 50;
  let y = 150;
  let r = 10;
  let s = new Ship(x, y, r);
  ships.push(s);
}

function draw() {
  background(0, 100, 255);
  Port();
  

  for(let i = 0; i < ships.length; i++){
    ships[i].keyTyped();
  }

  if(ships.select != false){
    //ships.mouseClicked();
    //newPos = ships.translate(posX, posY);
    //newPos = newPos + vel;
  }

  if(mouseIsPressed){
    if(mouseX > x){
    x++;
    }
  }

}

function Port() {
  //puerto
  fill(150, 10, 10);
  rect(0, 100, 80, 535);
  noStroke();

  //niveles
  //1
  fill(0, 100, 255);
  rect(35, 120, 50, 100);

  //2
  fill(0, 100, 255);
  rect(35, 250, 50, 100);

  //3
  fill(0, 100, 255);
  rect(35, 380, 50, 100);

  //4
  fill(0, 100, 255);
  rect(35, 510, 50, 100);
}

function mousePressed(){

  for(let i = 0; i < ships.length; i++){
    ships[i].SelectShip(mouseX, mouseY);
  }

    //movimiento
    /*let targetX = mouseX;
    let distanceX = targetX - this.x;
    this.x  += distanceX * vel;
  
    let targetY = mouseY;
    let distanceY = targetY - this.y;
    this.y  += distanceY * vel;*/

/* x++;----
    y++;

}

//para hacer la caja de seleccion
function mouseClicked() {
  //console.log("X:", mouseX, "Y:", mouseY);
}

class Ship{

  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = 255;
  }

  SelectShip(px, py){
    let distance = dist(px, py, this.x, this.y)
    let select = false;

    if(distance < this.r){
      this.color = 0;
      select != false;
      console.log(select);
      return select;

    } else {
      this.color = 255;
      console.log(select);
      return select;
    }
  }

  keyTyped(){
    if (key === "p") {
      stroke(0);
      fill(this.color, 255, 0);//fill(50, 50, 50);
      ellipse(this.x, this.y, 20, 20);
      console.log("Barco");
    }
  }

  /*Move(){
    //movimiento
    let targetX = mouseX;
    let distanceX = targetX - this.x;
    this.x  += distanceX * vel;

    let targetY = mouseY;
    let distanceY = targetY - this.y;
    this.y  += distanceY * vel;
  }*/
//}---

//----------------------------------------------------------------- intento 4 (movimiento)--------------------------------------------
//Barcos
let shipLv1 = [this.x1, this.y1];
let shipLv2;

//posicion barcos lv 1
let x1;
let y1;

//posicion barcor lv 2
let x2 = 50;
let y2 = 195;

/*/posicion barcor lv 3
let x3 = 50;
let y3 = 135;

//posicion barcor lv 4
let x4 = 50;
let y4 = 135;*/

//posicion barcos
/*let x = 50;
let y = 135;*/

//posicion barco grua
let xg;
let yg;

//img barcos
let ShipImg;
let ShipImg2;
let ShipImgGrua;
let ship;
let Txtzone;

//variables para boton de solicitud de grua
let ButtonCrane = false;

//variables HOVER
var distance;
//var b;

//variables para el degradado del mar
const Y_AXIS = 1, X_AXIS = 2;
let ColorIzquierdo, ColorDerecho;

//variables olas
let spritesheet;
let spritedata;

let animation = [];

let heroes = [];

//variables barras de progreso de pesca y gasolina
let Contador;
let ContadorPesca;

//variables seleccion
var Fleet = [];

//----------------------------------------------PRELOAD------------------------------------------------------------------
function preload(){
  //barcos
  ShipImg = loadImage('Assets/images/Sprite1.png');
  ShipImg2 = loadImage('Assets/images/Sprite2.png');

  ShipImgGrua = loadImage('Assets/images/BarcoGrua.png');

  //olas
  spritedata = loadJSON('CapitanP5/JsonOlas/Hero.json');
  spritesheet = loadImage('Assets/images/ola2.PNG');
}

//----------------------------------------------SETUP------------------------------------------------------------------
function setup(){

  let renderer = createCanvas(1030 , 655);
  renderer.parent("FishingContainer");
  

  //Barcos
  shipLv1 = new Ship(x1, y1);
  shipLv2 = new Ship(x2, y2);
  shipLv3 = new Ship(50, 150);
  shipLv4 = new Ship(50, 250);
  shipGrua = new Ship(xg,yg);

  //console.log(ship);

  //definicion de colores por RGB
  ColorDerecho = color(0,0,50);
  ColorIzquierdo = color(0, 100, 255);

  ///olas
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++){
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
  }

  //numero de olas
 for (let i = 0; i < 12; i++){
      heroes[i] = new Sprite(animation, 0 , i * 48, random(0.12,   0.138));
  }
//ensayo
  //inicializacion variables HOVER
  b = 200;

  //Barras de progreso (Pesca y Gasolina)
  //gasolina
  Contador = new Ship(100,0);
  Contador.Start();

  //pesca
  ContadorPesca = new Ship(0,100);
  ContadorPesca.Pescar();

}

//--------------------------------------------------DRAW----------------------------------------------------------
function draw(){
 //background(29,69,182);//color de fondo azul claro

 //tamaño mar
 setGradient(0, 0, 1030, 675, ColorIzquierdo, ColorDerecho, X_AXIS);//(posicion en x, posicion en y, ancho, alto)

 mouseReleased();
 Port();

 //----------------------pruebas para delimitar zonas de pesca
 /*console.log(shipLv1.x1,shipLv1.y1);

 //rectangulo 1
 fill(255, 255, 255);
 rect(200, 50, 100, 170);

 //rectangulo 2
 fill(150, 150, 150);
 rect(200, 300, 100, 100);

 //rectangulo 3
 fill(50, 50, 50);
 rect(200, 450, 100, 220);*/

//-----------------------fin pruebas para delimitar zonas de pesca

 //olas
  for (let hero of heroes){
      hero.show();
      hero.animate();
    }
  

 //llamado de metodo para ver el barco
 shipLv1.body();
 shipLv2.body();
 shipLv3.body();
 shipLv4.body();
//shipGrua.Crane();//revisar
 
 shipLv1.Move();
 
 //llamado de metodo para ver la informacion del barco ("HOVER")
 shipLv1.InformationShip();
 shipLv1.SelectShip();
 
 Zone();//Informacion navegacion por niveles

 console.log(mouseX,mouseY);


}

//--------------------------------------------------PUERTO-----------------------------------------------------------
function Port() {
  //puerto
  fill(150, 10, 10);
  rect(0, 0, 40, 675);//(margen izq, margen sup, ancho, margen der)
  noStroke();

  //niveles
  //1
  fill(150, 10, 10);
  rect(30, 0, 50, 40);

  //2
  fill(150, 10, 10);
  rect(30, 156, 50, 40);

  //3
  fill(150, 10, 10);
  rect(30, 312, 50, 40);  

  //4
  fill(150, 10, 10);
  rect(30, 468, 50, 40);

  //5
  fill(150, 10, 10);
  rect(30, 625, 50, 40);  
}

/*function mousePressed(){

  if(mouseX == this.x1 && mouseY == this.y1){
    fill(120,240,115);
    //console.log("select");
  }
  
}*/

function mouseClicked() {

  for (var i = 0; i < Fleet.length; i++){
    Fleet[i].SelectShip();
 }
}

function mouseIsPressed(){
  fill(255, 233, 0);
  x++;
}

function mouseReleased() {
  //ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

/*keyTyped(){
  if (key === "p") {
    stroke(0);
    fill(this.color, 255, 0);//fill(50, 50, 50);
    ellipse(this.x, this.y, 20, 20);
    console.log("Barco");
  }
}*/

//-------------------------------------------DEGRADADO----------------------------------------------------------------
function setGradient(x, y, w, h, ColorIzquierdo, ColorDerecho){
  noFill();
  
    for (let i = x; i <= x + w; i++){
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(ColorIzquierdo, ColorDerecho, inter);
      stroke(c);
      line(i, y, i, y + h);
    }

}

//----------------------------------------Fin DEGRADADO----------------------------------------------------------------

//---------------------------------------------Nombre Zonas----------------------------------------------------------
function Zone(){
  //zonas del mar
  textSize(15);
  textFont('segoe ui');
  textStyle(BOLD);
  fill(255,233,0);  
  noStroke();
  Txtzone1 = text('Zona Costera:' + '\nNiveles de barcos: 1,2,3,4', 250, 15);
  Txtzone2 = text('Zona Aguas profundas:' + '\nNiveles de barcos: 3 y 4', 500, 15);
  Txtzone3 = text('Zona Altamar:' + '\nNiveles de barcos: 4', 800, 15);
  }

//-------------------------------------------CLASE BARCO-------------------------------------------------------------
class Ship{
  constructor(s,w,r){

    //this.x = 50;
    //this.y = 135;

    this.x1= 50;
    this.y1 = 45;
    
    this.x2 = 50;
    this.y2 = 255;

    /*this.x4 = 50;
    this.y4 = 195;*/

    //posicion de la grua
    this.xg = 200;
    this.yg = 200;

    //esto es de la barra de progreso
    this.s = s;
    this.w = w;

    //prueba seleccion
    this.r = r;

    
  }

  body(){
    image(ShipImg, this.x1, this.y1);
    image(ShipImg2, this.x2, this.y2);
    image(ShipImgGrua, this.xg, this.yg);
    ShipImg.resize(50, 30);
    ShipImg2.resize(70, 50);
    ShipImgGrua.resize(100,80);
  }
  
  //---------------------------------------prueba seleccion-------------------------------------------
  SelectShip = function() {
    var Mousedistance = dist(mouseX, mouseY, this.x1, this.y1);
    //recuadro de seleccion
    /*if (keyIsPressed === true) {
      console.log("presionanda")

    } else {
        noFill();
        rect(this.x1 - 5, this.y1 - 5, 90, 65);

        if (keyIsPressed === false){
          console.log("66666")
          rect(this.x1 - 5, this.y1 - 5, 90, 65);
          fill(0,255,0);
        }
    }*/
   
    /*if(Mousedistance >= 20 && Mousedistance <= 80){
      console.log("presionanda")
      noFill();
      rect(this.x1 - 5, this.y1 - 5, 90, 65);

      if(keyIsPressed === true){
        stroke(0,255,0);
        noFill();
        rect(this.x1 - 5, this.y1 - 5, 90, 65);*/

        /*
        if(click == true && distance <=20 || distance >=80){
          stroke(0,255,0);
          rect(this.x1 - 5, this.y1 - 5, 90, 65);
        }
        
      }
    }*/

    if(Mousedistance >= 20 && Mousedistance <= 80){
      console.log("presionanda")
      noFill();
      rect(this.x1 - 5, this.y1 - 5, 60, 40);
    }

    if(Mousedistance >= 20 && Mousedistance <= 80 && keyIsPressed === true){
      stroke(0,255,0);
      noFill();
      rect(this.x1 - 5, this.y1 - 5, 60, 40);
    }
    else{
      console.log("nada")
    }

  }

  /*SelectShip(x1, y1){
    let distance = dist(x1, y1, this.x1, this.y1);
    let select = false;

    if(distance < this.r){

      rect(this.x1 - 5, this.y1 - 5, 90, 85);
      fill(0,255,0);
      select != false;
      console.log(select);
      return select;

    }else{
      noFill();
      rect(this.x1 - 5, this.y1 - 5, 90, 65);
      
      console.log(select);
      return select;
    }

  }*/

  Move(){
    let LimitX1 = 301;
    let LimitX2 = 53;
    let LimiteInfY1 = 8;
    let LimiteSupY2 = 580;


    if (mouseIsPressed){ 

      if (mouseX > this.x1){
        this.x1++;
      }

      if (mouseX < this.x1){   
        this.x1--;
      }
        
      if (mouseY > this.y1){
        this.y1++;
      }
    
      if (mouseY < this.y1 || this.y1 >= LimiteSupY2){
          this.y1--;
      }

        //limites de movimiento
      if (this.x1 >= LimitX1){
        this.x1 = 300;
      }

      if (this.y1 <= LimiteInfY1){
        this.y1 = 10;
      }

      if(this.x1 <= LimitX2){
        this.x1 = LimitX2;
      } 
    } 
  }

  //--------------------HOVER------------------------
  InformationShip(){
  distance = dist(mouseX, mouseY, this.x1, this.y1)
    if (distance >= 20 && distance <= 80 && this.y1 < 458){
        //b=255
        fill(255, 255, 255);
        rect(this.x1, this.y1 + 50, 200, 100);

        //barras de progreso Pesca y Gasolina
        this.ProgressbarGas();
        this.ProgressbarFishing();
    }

    if(this.x1 >= 299){
      let Mensaje = 'Debes mejorar este barco, para que pueda navegar en aguas más profundas';
      textSize(12);
      fill(0);
      noStroke();
      text(Mensaje, this.x1, this.y1 - 95, 125, 100);
    } 

    if(distance >= 20 && distance <= 80 && this.y1 > 458){
      //b=255
      fill(255, 255, 255);
      rect(this.x1, this.y1 - 110, 200, 100);
      
      //barras de progreso Pesca y Gasolina
      this.ProgressbarGas();
      this.ProgressbarFishing();
    }

  }

  //---------------------------------------BARRAS DE PROGRESO GASOLINA Y PESCA ---------------------------------------
  ProgressbarGas(){

    //Gasolina
    let valorInicial = round(Contador.s);
    let progreso = map(valorInicial, 0, 100, 0, 150);
    
    //Gasolina
    if(this.y1 < 458){

      fill(0);
      textSize(12);
      textFont('segoe ui');
      let txt = text('Gas: ' + ' ' + valorInicial + '%', this.x1 + 10, this.y1 + 65);
      
      fill(255, 70, 35);
      rect(this.x1 + 20, this.y1 + 75, progreso, 20, 15);
      //noStroke();
      //noFill();
      //rect(this.x1 + 20, this.y1 + 95, 150, 20, 15);
    }

    if(floor(random(0)) == 100) {
       Contador.reset();
    }

    if(this.y1 > 458){

      //Gasolina
      fill(0);
      textSize(12);
      textFont('segoe ui');
      let txt = text('Gas: ' + ' ' + valorInicial + '%', this.x1 + 10, this.y1 - 90);
      
      fill(255, 70, 35);
      rect(this.x1 + 20, this.y1 - 80, progreso, 20, 15);
    }

  }

  ProgressbarFishing(){

    //Pesca
    let valorInicialPesca = round(ContadorPesca.s);
    let progresoPesca = map(valorInicialPesca, 0, 100, 0, 150);

    if(this.y1 < 458){

      //Pesca
      fill(0);
      textSize(12);
      textFont('segoe ui');
      let txt2 = text('Pesca: ' + ' ' + valorInicialPesca + '%', this.x1 + 10, this.y1 + 110);
      
      fill(50, 50, 255);  
      stroke(100, 100, 100);
      rect(this.x1 + 20, this.y1 + 120, progresoPesca, 20, 15);
      noFill();
      rect(this.x1 + 20, this.y1 + 75, 150, 20, 15);//cuadro sin relleno
      //noStroke();
    }

    if(this.y1 > 458){

      //Pesca
      fill(0);
      textSize(12);
      textFont('segoe ui');
      let txt2 = text('Pesca: ' + ' ' + valorInicialPesca + '%', this.x1 + 10, this.y1 - 45);
      
      fill(50, 50, 255);  
      stroke(100, 100, 100);
      rect(this.x1 + 20, this.y1 - 35, progresoPesca, 20, 15);
      noFill();
      rect(this.x1 + 20, this.y1 - 80, 150, 20, 15);//cuadro sin relleno
      //noStroke();
    }

    if (floor(random(0)) == 100) {
       ContadorPesca.reset();
      }
  }
    

  Start(){

      if (!this.done) {
        setInterval(() => this.Contador(),this.w)
      }

  }

  Pescar(){
    
      if (!this.done) {
        setInterval(() => this.Fishing(),this.w)
      }

  }

  //gasolina
  Contador(){

    //Mermar Gasolina
    //console.log(shipLv1.x1, shipLv1.y1); //prueba de variables
    if(this.s > 0 && shipLv1.x1 != 50 && shipLv1.y1 != 135){

      //this.s -= 0.005;
      this.s -= 1;
    
      if(this.s <= 0){

      document.getElementById("square").style.zIndex = "1";
      this.Crane();

      } else{

        document.getElementById("square").style.zIndex = "-1";

      }

    }


    //Tanquear Barco
    if(this.s < 100 &&  shipLv1.x1 < 200 && shipLv1.y1 < 200){

      //this.s += 0.008;//este es el valor definitivo
      this.s += 1;//valor de pruebas
      
    }
  }

  //Grua
  Crane(){

    let BtnCrane = document.getElementById('PopCraneValue');

    
    BtnCrane.onclick = () => {
      const BtnValue = document.getElementById('PopCraneValue');
      const State = BtnValue.value;

      if(State == BtnValue.value){
          document.getElementById("square").style.zIndex = "-1";
          image(ShipImgGrua, this.xg, this.yg);
          this.xg = 200;
          this.yg = 200;
      }
    }
  }

  //pesca
  Fishing(){

    //let RandomZone = Math.floor(Math.random() * 3);
    let RandomZone1 = random(0,0.01);
    let RandomZone2 = random(0,0.02);
    let RandomZone3 = random(0,0.03);

      if(this.s < 100 && shipLv1.x1 > 180 && shipLv1.y1 >= 8 && shipLv1.y1 < 198){
        this.s += RandomZone1;
        console.log(this.s);
      }

      if(this.s < 100 && shipLv1.x1 > 180 && shipLv1.y1 >= 198 && shipLv1.y1 < 388){
        this.s += RandomZone2;
        console.log(this.s);
      }

      if(this.s < 100 && shipLv1.x1 > 180 && shipLv1.y1 >= 388 && shipLv1.y1 <= 580){
        this.s += RandomZone3;
        console.log(this.s);
      }

      //Descargue en puerto barco nivel 1
      if(this.s > 0 && shipLv1.x1 <= 80 && shipLv1.y1 <= 140){
        this.s -= 0.1;
      }
      
  }

  reset(){
    this.s = 0;
  }

  //-----------------------------------------------------FIN BARRAS DE PROGRESO-------------------------------------

}


//-----------------------------------------------CLASE OLAS--------------------------------------------------------
class Sprite {
  constructor(animation, x, y, speed, distanciaOla) {
    this.x = 250;
    this.y = y + 50;
    this.distanciaOla = 500;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
    this.x += this.speed * 4;

    if (this.x > width) {
      this.x = 250;
    }
  }
}

//-----------------------------------------------CLASE MAR------------------------------------------------------------
/*class Sea{

constructor(zone){

  zone = this.zone;

}

Zone(){

    //zonas del mar
    textSize(30);
    textFont('segoe ui');
    fill(0, 102, 153);  
    text('zona costera', 50, 680);// + '\nNiveles de barcos: 1' + 'zona altamar' + '\nNiveles de barcos permitidos: 2 y 3');
    
  }

}*/
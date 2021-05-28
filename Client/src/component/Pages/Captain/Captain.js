import { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";
//import p5Types from "p5";
import p5 from "p5";

export default function Captain() {

    class Ship {
    constructor(
      x,
      y,
      img,
      level,
      direction,
      progressbarGas,
      progressbarFish,
      select
    ) {
      this.x = x;
      this.y = y;
      this.img = img;
      this.level = level;
      this.direction = direction;
      this.progressbarGas = progressbarGas;
      this.progressbarFish = progressbarFish;
      this.select = select;
    }

    body() {
      //ShipImg = loadImage('Assets/images/Sprite1.png');
      p5.rect(this.x, this.y, 50, 50);
    }

    keyPressed(keyCode) {
      console.log(keyCode);
      if (keyCode === "LEFT_ARROW") {
        ships1.push({ ships1 });
        console.log(ships1);
      }

      if (keyCode === "UP_ARROW") {
        ships2.push(new ships2());
        console.log(ships2);
      }
    }
  }
  //------------------------------Ship
  


  const processingRef = useRef();

  const [ships1, setShips1] = useState([]);
  const [ships2, setShips2] = useState([]);

  useEffect(() => {
    console.log("ff");
    new p5((p) => {


        p.setGradient = (x, y, w, h, ColorIzquierdo, ColorDerecho) => {
            
            for (let i = x; i <= x + w; i++){
                let inter = p.map(i, x, x + w, 0, 1);
                let c = p.lerpColor(ColorIzquierdo, ColorDerecho, inter);
                p.stroke(c);
                p.line(i, y, i, y + h);
            }
          
        };

      p.setup = () => {
        //p.background("#ff0000");

        p.createCanvas(window.innerWidth, window.innerHeight);
        for (let i = 0; i < 1; i++) {
          setShips1(new Ship(50, 50, 0, 1));
          setShips2(new Ship(50, 150, 0, 2));
        }

        //definicion de colores por RGB
        //const ColorDerecho = p.color(0,0,50);
        //const ColorIzquierdo = p.color(0, 100, 255);

      };

      p.draw = () => {
        //p.background(100,250,100);
        p.setGradient(0, 0, window.innerWidth, 675, p.color(0, 100, 255), p.color(0,0,50), 0, 2);//(posicion en x, posicion en y, ancho, alto)
        if (ships1.length > 0 && ships1.length > 0) {
          for (let i = 0; i < 1; i++) {
            ships1[i].body();
            ships2[i].body();

            //ships1[i].keyPressed();
          }
        }
      };

    }, processingRef.current);
  }, []);

  return (
    <div>
      <div ref={processingRef} />
    </div>
  );
}

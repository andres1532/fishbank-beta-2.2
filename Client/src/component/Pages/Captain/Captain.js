import { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";
//import p5Types from "p5";
import p5 from "p5";
import imgb from "../../../assets/imagenes/ship.svg";

export default function Captain() {

    const Ship = ( 
      p,
      x,
      y,
      img,
      level,
      direction,
      progressbarGas,
      progressbarFish,
      select
    ) => {

    const body = () => {
      let ShipImg = p.loadImage(img, img => {
        p.redraw(); // <- only if you're running with noLoop()
      });

      
      p.fill(200,50,200);
      p.rect(x, y, 50, 50);
      p.background(ShipImg);
      
      p.image(ShipImg);
      //console.log(p.image);
      //debugger;
      ShipImg.resize(50, 30);
      //console.log(ShipImg);
      //image(ShipImg, this.x1, this.y1);

    }

    const keyPressed = (keyCode) => {
     // console.log(keyCode);
      if (keyCode === "LEFT_ARROW") {
        ships1.push({ ships1 });
        console.log(ships1);
      }

      if (keyCode === "UP_ARROW") {
        ships2.push(ships2());
        console.log(ships2);
      }
    }
        console.log("fin del proyecto")
    return{body,keyPressed};
  }
  //------------------------------fin Ship
  


  const processingRef = useRef();

  const [ships1, setShips1] = useState([]);
  const [ships2, setShips2] = useState([]);
  let state={ships1xx: [], ships2xx: []}
  const Sketch = (p) => {


    /*p.setGradient = (x, y, w, h, ColorIzquierdo, ColorDerecho) => {
        
        for (let i = x; i <= x + w; i++){
            let inter = p.map(i, x, x + w, 0, 1);
            let c = p.lerpColor(ColorIzquierdo, ColorDerecho, inter);
            p.stroke(c);
            p.line(i, y, i, y + h);
        }
      
    };*/

     p.setup = () => {
         
        let temp1 = [], temp2 = [];

        p.createCanvas(window.innerWidth, window.innerHeight);
        for (let i = 0; i < 1; i++) {
        temp1.push(Ship(p,50, 50, imgb, 1));
        temp2.push(Ship(p,50, 150, imgb, 2));
        }

        setShips1(temp1);
        setShips2(temp2);
        console.log(temp1);
        state.ships1xx = temp1;
        state.ships2xx = temp2;

        console.log(state.ships2xx[0].body);
    };

  p.draw = () => {
    p.background(220);
    //console.log(ships1);
        //p.setGradient(0, 0, window.innerWidth, window.innerHeight, p.color(0, 100, 255), p.color(0,0,50), 0, 2);//(posicion en x, posicion en y, ancho, alto)
        if (state.ships1xx.length > 0 && state.ships2xx.length > 0) {
            //console.log("hh");
            for (let i = 0; i < 1; i++) {
                state.ships1xx[i].body();
                state.ships2xx[i].body();

                state.ships1xx[i].keyPressed();
            }
        }
    };

}
  
  useEffect(() => {
    console.log("ff");
    new p5(Sketch, processingRef.current);
  }, []);

  return (
    <div>
      <div ref={processingRef} />
    </div>
  );
}

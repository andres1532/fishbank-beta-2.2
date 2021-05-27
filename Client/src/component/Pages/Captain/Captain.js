import {useState, useEffect, useRef} from 'react';
import Sketch from 'react-p5';
//import p5Types from "p5";

//import React, { useRef, useEffect } from "react";
import p5 from "p5";

/*export default () => {

    const [ships1, setships1] = useState([])
    const [ships2, setships2] = useState([])

    useEffect(()=>{
        const Ship = (x, y, img, level, direction, progressbarGas, progressbarFish, select) => {
        
            const body = () => {
              //ShipImg = loadImage('Assets/images/Sprite1.png');
              p5Types.rect(x, y, 50, 50);
            }
            
            const keyPressed = (keyCode) => {
              const k = keyCode;
              if (keyCode === "LEFT_ARROW") {
              ships1.push({ships1});
              
              }
              
              console.log(k);
              
              if (keyCode === "UP_ARROW") {
              ships2.push(new ships2());
              console.log(ships2);
              }
              
            }
            
        }

            //See annotations in JS for more information
            const setup = (p5, parentRef) => {
                p5.createCanvas(500, 500).parent(parentRef);
        
                for (let i=0; i < 1; i++){

                    setships1(new Ship(50,50,0,1));
                    setships2(new Ship(50,150,0,2));
                    }
                };
        
                const draw = (p5) => {
                    p5.background(0);
                    for (let i=0; i < 1; i++){
                        ships1[i].body();
                        ships2[i].body();
                        
                        ships1[i].keyPressed();
                    }
                };

    })

            return (
                <div className="App">
                    <Sketch setup={setup} draw={draw}/>
                </div>
            );

}*/

class Ship {
    /*const body = () => {
        //ShipImg = loadImage('https://th.bing.com/th/id/R8aa1b685a490d6abb6edc38d109d29ba?rik=Y8Yg04rH1PYp8A&pid=ImgRaw');
         p5.rect(x, y, 50, 50);
       }

       /*const keyPressed = (keyCode) => {
         const k = keyCode;
         if (keyCode === "LEFT_ARROW") {
         ships1.push({ships1});

         }

         console.log(k);

         if (keyCode === "UP_ARROW") {
         console.log(ships2);
         }

       }*/

       constructor(x, y, img, level, direction, progressbarGas, progressbarFish, select){
        this.x = x;
        this.y = y;
        this.img = img;
        this.level = level;
        this.direction = direction;
        this.progressbarGas = progressbarGas;
        this.progressbarFish = progressbarFish;
        this.select = select;
  }
  
        body(){
            //ShipImg = loadImage('Assets/images/Sprite1.png');
            p5.rect(this.x, this.y, 50, 50);
        }
        
        keyPressed() {
            
            if (keyCode === LEFT_ARROW) {
            ships1.push({ships1});
            console.log(ships1);
            }
            
            if (keyCode === UP_ARROW) {
            ships2.push(new ships2());
            console.log(ships2);
            }
            
        
        }

}

export default function Captain ()  {
    /*const myRef = useRef(null);
 const [ships1, setShipts1] = useState([]);
  const [ships2, setShipts2] = useState([]);


  const Ship = (x, y, img, level, direction, progressbarGas, progressbarFish, select) => {

            const body = () => {
             //ShipImg = loadImage('https://th.bing.com/th/id/R8aa1b685a490d6abb6edc38d109d29ba?rik=Y8Yg04rH1PYp8A&pid=ImgRaw');
              p5.rect(x, y, 50, 50);
            }

            const keyPressed = (keyCode) => {
              const k = keyCode;
              if (keyCode === "LEFT_ARROW") {
              ships1.push({ships1});

              }

              console.log(k);

              if (keyCode === "UP_ARROW") {
              console.log(ships2);
              }

            }

        }

  const Sketch = (p,parentRef) => {

     p.setup = () => {
            p.background("#ff0000");

      p.createCanvas(500, 500).parent(myRef);
      for (let i=0; i < 1; i++){

        setShipts1(new Ship(50,50,0,1));
        setShipts2(new Ship(50,150,0,2));
                    }
       
     }


     p.draw = () => {

       p.background("#ff0000");
                    for (let i=0; i < 1; i++){
                        ships1[i].body();
                        ships2[i].body();

                        ships1[i].keyPressed();
                    }
     }

  }



 
useEffect(() => {

  const myP5 = new p5(Sketch, myRef.current)
}, []);
    return (
      <div ref={myRef}>

      </div>
    )*/

    const processingRef = useRef();

    const [ships1, setShips1] = useState([]);
    const [ships2, setShips2] = useState([]);
  
  


    const Sketch = p => {
    p.setup = () => {
       p.background("#ff0000");

       //p.createCanvas(500, 500).parent(processingRef);
       for (let i=0; i < 1; i++){
 
         setShips1(new Ship(50,50,0,1));
         setShips2(new Ship(50,150,0,2));
                     }
    };

    p.draw = () => {
        p.background("#ff0000");
                    for (let i=0; i < 1; i++){
                        ships1[i].body();
                        ships2[i].body();

                        //ships1[i].keyPressed();
                    }
    };
     };
   useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
    }, [])

  return <div ref={processingRef} />;
  }

  

/*
Aufgabe: 5, Skifahrer
Name: Vanessa
Matrikel: 
Datum: 08.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe5 {
    
     export let crc2: CanvasRenderingContext2D;

    let ski: Skier[]=[];
    //let squares: Square[] = [];
    window.addEventListener("load", main);


    //Funktion Canvas    
    window.addEventListener("load", main);
    let schneeX: number[] = [];
    let schneeY: number[] = [];
    let wolkeX: number[] = [];
    let wolkeY: number[] = [];
  
    var image: any;
    
    //Main function
    function main(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        
        for(let i:number=0 ; i< 5;i++){
            let s:Skier = new Skier();
            s.setRandomStyle();
            ski[i] = s;
        }
        
        /**  for (let i: number = 0; i < 5; i++) {
            skier[i] = {
                 x: 290,
                y: 230,
                dx: Math.random() * 8 + 5,
                dy: Math.random() * 8 + 10,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };}
**/
    
        
        
        //Start Schnee,Skifahrer,wolke
        for (let i = 0; i < 200; i++) {
            schneeX[i] = 0 + Math.random() * 800;
            schneeY[i] = 0 + Math.random() * 600;
        }
          
//        for (let i = 0; i < 3; i++) {
//            skier[i].x = -20;
//            skier[i].y = 250;
//        }
        
     
        for (let i = 0; i < 4; i++) {
            wolkeX[i] = 0 + Math.random() * 800;
            wolkeY[i] = 0 + Math.random() * 100 + 20;
        }
   //Zeichnen von Hintergrund
        
         //Himmel    
        crc2.fillStyle = "#CEECF5";
        crc2.fillRect(0, 0, 800, 600);

         //Berg1    
        crc2.beginPath();
        crc2.moveTo(0, 620);
        crc2.lineTo(600, 600);
        crc2.lineTo(300, 50);
        crc2.closePath();
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();

        //Berg2    
        crc2.beginPath();
        crc2.moveTo(400, 600);
        crc2.lineTo(800, 600);
        crc2.lineTo(600, 120);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();

        //Berg3    
        crc2.beginPath();
        crc2.moveTo(500, 700);
        crc2.lineTo(800, 600);
        crc2.lineTo(650, 160);
        crc2.closePath();
        crc2.strokeStyle = "#A4A4A4";
        crc2.stroke();
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();

        //Berg4    
        crc2.beginPath();
        crc2.moveTo(500, 700);
        crc2.lineTo(800, 600);
        crc2.lineTo(300, 50);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();

        //Berg5    
        crc2.beginPath();
        crc2.moveTo(300, 700);
        crc2.lineTo(900, 700);
        crc2.lineTo(500, 100);
        crc2.closePath();
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();
       
        //Berg6    
        crc2.beginPath();
        crc2.moveTo(550, 720);
        crc2.lineTo(900, 700);
        crc2.lineTo(500, 100);
        crc2.closePath();
        crc2.strokeStyle = "#A4A4A4";
        crc2.stroke();
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
       
        //Skipiste    
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 250, 800, 350);

        //Lift    
        crc2.beginPath();
        crc2.moveTo(800, 800);
        crc2.lineTo(400, 160);
        crc2.lineTo(400, 250);
        crc2.strokeStyle = "#804000";
        crc2.stroke();

        //Sonnne    
        crc2.beginPath();
        crc2.arc(80, 90, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7D358";
        crc2.fill();

        //Wolke0    
        crc2.beginPath();
        crc2.arc(720, 70, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(710, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(685, 75, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Wolke1    
        crc2.beginPath();
        crc2.arc(500, 120, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(490, 130, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(480, 125, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Wolke2    
        crc2.beginPath();
        crc2.arc(520, 120, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(510, 130, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(505, 125, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(530, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Wolke   
        crc2.beginPath();
        crc2.arc(320, 120, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(260, 110, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(300, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(280, 125, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(270, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(330, 140, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(345, 145, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(360, 145, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(370, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(385, 150, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
          for (let i: number = 0; i < 6; i++) {
    
        let x: number = 10 + Math.random() * 170;
        let y: number = 380 + Math.random() * 170;
        
        drawTree1(x, y, "#0B610B");
        }
 for (let i: number = 0; i < 6; i++) {
    
        let x: number = 10 + Math.random() * 170;
        let y: number = 380 + Math.random() * 170;
        
        drawTree2(x, y, "#006200");
        }
  image = crc2.getImageData(0, 0, 800, 600);
        animiere();
    }  
    function drawTree1(_x: number, _y: number, _color: string): void {
        
    crc2.beginPath();
    crc2.moveTo(_x, _y);
    crc2.lineTo(_x + 30, _y);
    crc2.lineTo(_x + 15, _y - 30);
    crc2.closePath();
    crc2.strokeStyle = _color;
    crc2.stroke();
    crc2.fillStyle = _color;
    crc2.fill();
    
    }
  
     function drawTree2(_x: number, _y: number, _color: string): void {
        
    crc2.beginPath();
    crc2.moveTo(_x, _y);
    crc2.lineTo(_x + 40, _y);
    crc2.lineTo(_x + 20, _y - 60);
    crc2.closePath();
    crc2.strokeStyle = _color;
    crc2.stroke();
    crc2.fillStyle = _color;
    crc2.fill();
       }
        
      
        
         function animiere() {
            console.log("Timeout");
            crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
            crc2.putImageData(image, 0, 0); 
             
            //for-Schleife Schnee
            for (let i = 0; i < schneeX.length; i++) {
                if (schneeY[i] > 600) {
                    schneeY[i] = 0;
                }
                     schneeY[i] += Math.random();
                Schnee(schneeX[i], schneeY[i]);
            }
              //for-Schleife Wolken
            for (let i = 0; i < wolkeX.length; i++) {
                if (wolkeX[i] > 800) {
                    wolkeX[i] = 0;
                }
                wolkeX[i] += Math.random();
                Wolke(wolkeX[i], wolkeY[i]);
            } 
             
             
             
              //for-Schleife Skifahrer
           // for (let i: number = 0; i < 3; i++) 
            
            for (let i: number = 0; i < ski.length; i++) {  
                    let s: Skier= ski[i];
                    s. moveanddraw();

                    if (s.y > 650) {
                       s.setStart(); 
                    }
            }
              
            window.setTimeout(animiere, 20);
        }
    
        //Schnee generieren
        function Schnee(_x:number, _y:number) {
            crc2.beginPath();
            crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fillStyle = "#F1F7FA";
            crc2.fill();
        }
        
 
        //Wolken generieren
        function Wolke(_x:number, _y:number) {
            crc2.beginPath();
            crc2.arc(_x + 40, _y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 20, _y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y + 30, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 70, _y + 10, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 70, _y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }    
}
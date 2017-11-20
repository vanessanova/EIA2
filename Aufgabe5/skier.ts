
namespace Aufgabe5 {
    export class Skier{
   
        x: number;
        y: number;
        colorHead: string;
        colorBody: string;
        
        
  constructor () {
            this.setStart();
            this.colorBody = "hsl(" + Math.random() * 360 + ", 45%, 65%)";  
            this.colorHead = "#ff9f9f";
    
    }
        
          moveanddraw(): void {
            this.move();
            this.draw();           
        }
        
            move(): void {
            this.x +=  Math.random() * 2 + 2.5; // hier experimentieren um
            this.y += Math.random() * 2 + 3; // andere Bewegungsmuster zu finden
        }
   
        setStart(): void{
            
         this.x= Math.random()*290;
         this.y= 230;
        
        }
        
        draw() : void {
            
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 20, this.y + 10);
        crc2.strokeStyle = "#400000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 15, this.y + 15);
        crc2.strokeStyle = "#400000";
        crc2.stroke();
        //K�rper   
        crc2.fillStyle = this.colorBody;
        crc2.fillRect(this.x, this.y - 10, 10, 15);
        //Kopf
        crc2.beginPath();
        crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
        crc2.fillStyle = this.colorHead;
        crc2.fill();       
        }
    }
   }
namespace Aufgabe5 {
    export class Wolke{
   
        x: number;
        y: number;
        color: string
        
        
  constructor () {
            this.setStart();
            this.color = "#FFFFFF";
    }
          moveanddraw(): void {
            this.move();
            this.draw();        
        }
        
            move(): void {
            this.x +=  Math.random() + 1;
        }

        
      
       
        setStart(): void{
            
         this.x= 0 + Math.random() * 800;
         this.y= 0 + Math.random() * 100 + 20;
        
        }
        
        draw() : void {
            
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 20, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 20, this.y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y + 30, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 70, this.y + 10, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 70, this.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }    
        }
    }
   
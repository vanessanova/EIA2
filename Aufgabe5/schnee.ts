namespace Aufgabe5 {
    export class Schnee{
   
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
             this.x += 0;
             this.y += 2;
        }

      
       
        setStart(): void{
         this.x=0 + Math.random() * 800;
         this.y= 0 + Math.random() * 600;
        
        }
        
        draw() : void {
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fillStyle = "#F1F7FA";
            crc2.fill();
        }
        }
    }
   
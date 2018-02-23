namespace Aufgabe6 {
    export class Wolke2 extends MovingObjects{
   win:boolean = false;
  
  constructor() {
            super();
            this.setColor();
            this.setStart();
    
    }
          update(): void {
            this.draw();        
        }
        
            moveWolke(m:number): void {
            
                 if (this.x > 810) {
                this.win = true;
            }
        }

        
      
       
        setStart(): void{
            
         this.x= 0 ;
         this.y= 0 ;
        
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
       setColor() {
            this.color = "#FFFFF";
        }
   
        }
    }
   
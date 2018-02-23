namespace Aufgabe6 {
    export class Wolke extends MovingObjects{
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
            this.x += m;
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
            crc2.arc(this.x + 30, this.y+500, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y +500- 50, 45, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 30, this.y+490, 35, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y+500 + 40, 45, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y +490, 35, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 30, this.y+500, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 40, this.y+530, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y+530, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#D358F7";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.strokeStyle = "#00000";
            crc2.stroke();
            crc2.fillStyle = "#00000";
            crc2.fill();
            
            //Augen
            crc2.beginPath();
            crc2.arc(this.x -20, this.y+460 + 5, 5, 0, 2 * Math.PI);
            crc2.fillStyle= "black";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x +25, this.y+460 + 5, 5, 0, 2 * Math.PI);
            crc2.fillStyle= "black";
            crc2.fill();
            
        
            
        }
       setColor() {
            this.color = "#D358F7";
        }
   
        }
    }
   
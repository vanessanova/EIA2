namespace Aufgabe6{
    
     export class MovingObjects {                 //Superklasse f�r sich bewegende Objekte
        x: number;
        y: number;
        color: string;
    
 constructor() {
      console.log("Create shape");
            this.setColor();
            this.setStart();
        }

        drawandmove(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            //Unbef�llt
        }

        move(): void {
            //Unbef�llt
        }

        setStart(): void {
            //Unbef�llt
        }

       

        setColor(): void {
            //Unbef�llt;
        }

    }
}
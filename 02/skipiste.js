var Aufgabe5;
(function (Aufgabe5) {
    //Funktion Canvas    
    var crc2;
    var schneeX = [];
    var schneeY = [];
    var wolkenX = [];
    var wolkenY = [];
    var skifahrerX = [];
    var skifahrerY = [];
    var image;
    function main() {
        var canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Himmel    
        crc2.fillStyle = "#CEECF5";
        crc2.fillRect(0, 0, 800, 600);
        //Berg    
        crc2.beginPath();
        crc2.moveTo(0, 620);
        crc2.lineTo(600, 600);
        crc2.lineTo(300, 50);
        crc2.closePath();
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();
        //Ber    
        crc2.beginPath();
        crc2.moveTo(400, 600);
        crc2.lineTo(800, 600);
        crc2.lineTo(600, 120);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();
        //Ber    
        crc2.beginPath();
        crc2.moveTo(500, 700);
        crc2.lineTo(800, 600);
        crc2.lineTo(650, 160);
        crc2.closePath();
        crc2.strokeStyle = "#A4A4A4";
        crc2.stroke();
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
        //Ber    
        crc2.beginPath();
        crc2.moveTo(500, 700);
        crc2.lineTo(800, 600);
        crc2.lineTo(300, 50);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();
        //Ber    
        crc2.beginPath();
        crc2.moveTo(300, 700);
        crc2.lineTo(900, 700);
        crc2.lineTo(500, 100);
        crc2.closePath();
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();
        //Ber    
        crc2.beginPath();
        crc2.moveTo(550, 720);
        crc2.lineTo(900, 700);
        crc2.lineTo(500, 100);
        crc2.closePath();
        crc2.strokeStyle = "#A4A4A4";
        crc2.stroke();
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
        //Skipis    
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 250, 800, 350);
        //Li    
        crc2.beginPath();
        crc2.moveTo(800, 800);
        crc2.lineTo(400, 160);
        crc2.lineTo(400, 250);
        crc2.strokeStyle = "#804000";
        crc2.stroke();
        //Son    
        crc2.beginPath();
        crc2.arc(80, 90, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7D358";
        crc2.fill();
        //Wolk    
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
        //Wolk    
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
        //Wolk    
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
        //5 Schleife B�ume.Anzahl,wie oft und wo)
        /**      for (let i: number = 0; i < 5; i++) {
                  let x: number = 50 + Math.random() * 400;
                  let y: number = 550 + Math.random() * 60;
                  drawTree(x, y, "#006200");
              }
      
              //6 Schleifen und Startkoordinaten f�r ARRAYS schnee,Wolken,Skifahrer, Darstellungsbereich
              for (let i: number = 0; i < 100; i++) {
                  schneeX[i] = 0 + Math.random() * 800; //Startkoordinaten x-Achse
                  schneeY[i] = 0 + Math.random() * 600; //Startkoordinaten y-Achse
              }
      
              for (let i: number = 0; i < 3; i++) {
                  wolkenX[i] = 0 + Math.random() * 800;
                  wolkenY[i] = 0 + Math.random() * 150 + 40;
              }
      
              for (let i: number = 0; i < 1; i++) {
                  skifahrerX[i] = 0;
                  skifahrerY[i] = 250;
      
              }
      
              image = crc2.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
              animate();
          }
      
          //7 Funktion f�r die Animationen
          function animate(): void {
              console.log("Timeout");
              crc2.clearRect(0, 0, 800, 600); // Hintergrund l�schen
              crc2.putImageData(image, 0, 0); //Hintergrund einf�gen
      
              //8 Schleifen schnee,Wolken und Skifahrer Bewegung. Also durchs Bild verlaufend!
              for (let i: number = 0; i < schneeX.length; i++) {
                  if (schneeY[i] > 600) {
                      schneeY[i] = 0;
                  }
      
                  schneeY[i] += Math.random(); // Bewegung und Geschwindigkeit der schnee y-Achse. Je gr��er die Zahl desto schneller die Bewegung
                  snowflake(schneeX[i], schneeY[i]); //Funktionsaufruf schnee, �bergabe X und Y-Werte
              }
      
              for (let i: number = 0; i < wolkenX.length; i++) {
                  if (wolkenX[i] > 800) {
                      wolkenX[i] = 0;
                  }
      
                  wolkenX[i] += Math.random();
                  cloud(wolkenX[i], wolkenY[i]);
      
              }
      
              for (let i: number = 0; i < skifahrerX.length; i++) {
                  if (skifahrerX[i] > 800) {
                      skifahrerX[i] = 0;
                      skifahrerY[i] = 250;
                  }
      
                  skifahrerX[i] += 10;
                  skifahrerY[i] += 5;
                  mann(skifahrerX[i], skifahrerY[i]);
      
              }
      
              window.setTimeout(animate, 20);
            //Funktion f�r B�ume
          function drawTree(_x: number, _y: number, _color: string): void {
              crc2.beginPath();
              crc2.moveTo(_x, _y);
              crc2.lineTo(_x + 50, _y);
              crc2.lineTo(_x + 25, _y - 100);
              crc2.closePath();
              crc2.strokeStyle = _color;
              crc2.stroke();
              crc2.fillStyle = _color;
              crc2.fill();
          }
          //Funktion f�r Schneeflocken
          function snowflake(_x: number, _y: number): void {
              crc2.beginPath();
              crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
              crc2.fillStyle = "#FFFFFF";
              crc2.fill();
          }
          //Funktion f�r Wolken
          function cloud(_x: number, _y: number): void {
              crc2.beginPath();
              crc2.arc(_x + 30, _y, 50, 0, 2 * Math.PI);
              crc2.fill();
              crc2.beginPath();
              crc2.arc(_x, _y - 40, 40, 0, 2 * Math.PI);
              crc2.fill();
              crc2.beginPath();
              crc2.arc(_x, _y, 60, 0, 2 * Math.PI);
              crc2.fillStyle = "#FFFFFF";
              crc2.fill();
          }
      
          //Funktion f�r Skifahrer
          function mann(_x: number, _y: number): void {
              crc2.fillStyle = "#B40431";
              crc2.fillRect(_x, _y, 10, -25);
              crc2.beginPath();
              crc2.arc(_x + 20, _y - 35, 15, 0, 2 * Math.PI);
              crc2.fill();
              crc2.beginPath();
              crc2.moveTo(_x - 30, _y - 15);
              crc2.lineTo(_x + 40, _y + 10);
              crc2.stroke();
          }
          }
      **/
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=skipiste.js.map
/*
Aufgabe: 5, Skifahrer
Name: Vanessa
Matrikel:
Datum: 08.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    var ski = [];
    var schnee = []; //Startwert Schneeflocken
    var wolke = []; //Startwert Wolken
    //Funktion Canvas    
    window.addEventListener("load", main);
    var image;
    //Main function
    function main() {
        var canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe6.crc2 = canvas.getContext("2d");
        //Skifahrer
        for (var i = 0; i < 5; i++) {
            var s = new Aufgabe6.Skier();
            ski[i] = s;
        }
        //Schneeflocken
        for (var i = 0; i < 500; i++) {
            var s = new Aufgabe6.Schnee();
            schnee[i] = s;
        }
        //Wolken 
        for (var i = 0; i < 4; i++) {
            var s = new Aufgabe6.Wolke();
            wolke[i] = s;
        }
        //Zeichnen von Hintergrund
        //Himmel    
        Aufgabe6.crc2.fillStyle = "#CEECF5";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berg1    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 620);
        Aufgabe6.crc2.lineTo(600, 600);
        Aufgabe6.crc2.lineTo(300, 50);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#D8D8D8";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        //Berg2    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(400, 600);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(600, 120);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#c2c2c2";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#c2c2c2";
        Aufgabe6.crc2.fill();
        //Berg3    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 700);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(650, 160);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#A4A4A4";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#A4A4A4";
        Aufgabe6.crc2.fill();
        //Berg4    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 700);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(300, 50);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#c2c2c2";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#c2c2c2";
        Aufgabe6.crc2.fill();
        //Berg5    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(300, 700);
        Aufgabe6.crc2.lineTo(900, 700);
        Aufgabe6.crc2.lineTo(500, 100);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#D8D8D8";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        //Berg6    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(550, 720);
        Aufgabe6.crc2.lineTo(900, 700);
        Aufgabe6.crc2.lineTo(500, 100);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#A4A4A4";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#A4A4A4";
        Aufgabe6.crc2.fill();
        //Skipiste    
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fillRect(0, 250, 800, 350);
        //Lift    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(800, 800);
        Aufgabe6.crc2.lineTo(400, 160);
        Aufgabe6.crc2.lineTo(400, 250);
        Aufgabe6.crc2.strokeStyle = "#804000";
        Aufgabe6.crc2.stroke();
        //Sonnne    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(80, 90, 40, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#F7D358";
        Aufgabe6.crc2.fill();
        //Wolke0    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(720, 70, 25, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(710, 80, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(685, 75, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Wolke1    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(500, 120, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(490, 130, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(480, 125, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Wolke2    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(520, 120, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(510, 130, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(505, 125, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(530, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Wolke   
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(320, 120, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(260, 110, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(300, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(280, 125, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(270, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(330, 140, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(345, 145, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(360, 145, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(370, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(385, 150, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        for (var i = 0; i < 6; i++) {
            var x = 10 + Math.random() * 170;
            var y = 380 + Math.random() * 170;
            drawTree1(x, y, "#0B610B");
        }
        image = Aufgabe6.crc2.getImageData(0, 0, 800, 600);
        animiere();
    }
    function drawTree1(_x, _y, _color) {
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x, _y);
        Aufgabe6.crc2.lineTo(_x + 30, _y);
        Aufgabe6.crc2.lineTo(_x + 15, _y - 30);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = _color;
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = _color;
        Aufgabe6.crc2.fill();
    }
    function animiere() {
        console.log("Timeout");
        Aufgabe6.crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        Aufgabe6.crc2.putImageData(image, 0, 0);
        //for-Schleife Schnee
        for (var i = 0; i < schnee.length; i++) {
            var s = schnee[i];
            s.moveanddraw();
            if (s.y > 600) {
                s.setStart();
            }
        }
        //for-Schleife Wolken
        for (var i = 0; i < wolke.length; i++) {
            var s = wolke[i];
            s.moveanddraw();
            if (s.x > 800) {
                s.setStart();
            }
        }
        //for-Schleife Ski
        for (var i = 0; i < ski.length; i++) {
            var s = ski[i];
            s.moveanddraw();
            if (s.y > 650) {
                s.setStart();
            }
        }
        window.setTimeout(animiere, 20);
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=skipiste6.js.map
var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", ski);
    var crc2;
    //Funktion Canvas
    function ski() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        var crc2 = canvas.getContext("2d");
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
        //Sonne
        crc2.beginPath();
        crc2.arc(80, 90, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7D358";
        crc2.fill();
        //Wolke1
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
        //Wolke2
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
        //Wolke3
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
        //Wolke3
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
        //Baum1
        /*
           crc2.beginPath();
           crc2.moveTo(50, 550);
           crc2.lineTo(100, 550);
           crc2.lineTo(75, 450);
           crc2.closePath();
           crc2.strokeStyle = "#38610B";
           crc2.stroke();
           crc2.fillStyle = "#38610B";
           crc2.fill();
           
        //Baum2
           
           crc2.beginPath();
           crc2.moveTo(130, 400);
           crc2.lineTo(180, 400);
           crc2.lineTo(155, 300);
           crc2.closePath();
           crc2.strokeStyle = "#5FB404";
           crc2.stroke();
           crc2.fillStyle = "#5FB404";
           crc2.fill();
           
       
           //Baum3
           
           crc2.beginPath();
           crc2.moveTo(150, 500);
           crc2.lineTo(200, 500);
           crc2.lineTo(175, 420);
           crc2.closePath();
           crc2.strokeStyle = "#006200";
           crc2.stroke();
           crc2.fillStyle = "#006200";
           crc2.fill();
           
           //Baum4
           
           crc2.beginPath();
           crc2.moveTo(200, 550);
           crc2.lineTo(300, 550);
           crc2.lineTo(250, 320);
           crc2.closePath();
           crc2.strokeStyle = "#006200";
           crc2.stroke();
           crc2.fillStyle = "#006200";
           crc2.fill();
           
         }
           */
        function drawTree2(_x, _y, _color) {
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
        for (var i = 0; i < 6; i++) {
            var x = 10 + Math.random() * 170;
            var y = 380 + Math.random() * 170;
            drawTree1(x, y, "#006200");
        }
        function drawTree1(_x, _y, _color) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 40, _y);
            crc2.lineTo(_x + 20, _y - 60);
            crc2.closePath();
            crc2.strokeStyle = _color;
            crc2.stroke();
            crc2.fillStyle = _color;
            crc2.fill();
            //For Schleife Schneeflocken
            for (var i = 0; i < 200; i++) {
                var x = 0 + Math.random() * 800;
                var y = 0 + Math.random() * 250;
                drawSnowflakes(x, y, 2, 0, 2 * Math.PI, "#ffffff");
            }
            function drawSnowflakes(_x, _y, _radius, _winkel, _circle, _color) {
                crc2.beginPath();
                crc2.arc(_x, _y, _radius, _winkel, _circle);
                crc2.fillStyle = _color;
                crc2.fill();
            }
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=skipiste.js.map
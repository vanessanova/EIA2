var Aufgabe3;
(function (Aufgabe3) {
    //Funktion Canvas    
    var crc2;
    var snow = [];
    var skiboss = [-20, 250];
    var wolke = [];
    var imgData;
    window.addEventListener("load", main);
    function main() {
        var canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (var i = 0; i < 300; i++) {
            snow.push(Math.random() * 600, Math.random() * 800);
        }
        for (var i = 0; i < 6; i++) {
            wolke.push(Math.random() * 800, Math.random() * 100);
        }
        //Himm    
        crc2.fillStyle = "#CEECF5";
        crc2.fillRect(0, 0, 800, 600);
        //Ber    
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
    }
    for (var i = 0; i < 500; i++) {
        var x = 0 + Math.random() * 800;
        var y = 0 + Math.random() * 250;
        drawSnowflakes(x, y, "#ffffff");
    }
    /**
        for (let i: number = 0; i < 6; i++) {
    
            let _x: number = 10 + Math.random() * 170;
            let _y: number = 380 + Math.random() * 170;
    
            drawTree1(_x, _y, "#006200");
        }
    
    
    
        function drawTree1(_x: number, _y: number, _color: string): void {
    
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
    **/
    function drawSnowflakes(_x, _y, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
    }
    function drawCloud(_x, _y, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 20, _y + 10, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y + 10, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 20, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=skipiste1.js.map
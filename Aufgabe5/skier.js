var Aufgabe5;
(function (Aufgabe5) {
    var Skier = (function () {
        function Skier() {
            this.setStart();
            this.colorBody = "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            this.colorHead = "#ff9f9f";
        }
        Skier.prototype.moveanddraw = function () {
            this.move();
            this.draw();
        };
        Skier.prototype.move = function () {
            this.x += Math.random() * 8 + 5; // hier experimentieren um
            this.y += Math.random() * 8 + 10; // andere Bewegungsmuster zu finden
        };
        Skier.prototype.draw = function () {
            this.drawSkier();
            //  crc2.fillRect(this.x:number, this.y:number);
        };
        Skier.prototype.setRandomStyle = function () {
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        Skier.prototype.setStart = function () {
            this.x = Math.random() * 290;
            this.y = 230;
        };
        Skier.prototype.drawSkier = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y);
            Aufgabe5.crc2.lineTo(this.x + 20, this.y + 10);
            Aufgabe5.crc2.strokeStyle = "#400000";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y);
            Aufgabe5.crc2.lineTo(this.x + 15, this.y + 15);
            Aufgabe5.crc2.strokeStyle = "#400000";
            Aufgabe5.crc2.stroke();
            //K�rper   
            Aufgabe5.crc2.fillStyle = this.colorBody;
            Aufgabe5.crc2.fillRect(this.x, this.y - 10, 10, 15);
            //Kopf
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.colorHead;
            Aufgabe5.crc2.fill();
        };
        return Skier;
    }());
    Aufgabe5.Skier = Skier;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=skier.js.map
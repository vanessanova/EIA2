var Aufgabe5;
(function (Aufgabe5) {
    var Wolke = (function () {
        function Wolke() {
            this.setStart();
            this.color = "#FFFFFF";
        }
        Wolke.prototype.moveanddraw = function () {
            this.move();
            this.draw();
        };
        Wolke.prototype.move = function () {
            this.x += Math.random() + 1;
        };
        Wolke.prototype.setStart = function () {
            this.x = 0 + Math.random() * 800;
            this.y = 0 + Math.random() * 100 + 20;
        };
        Wolke.prototype.draw = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 40, this.y, 50, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y - 20, 50, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 20, this.y, 50, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y + 30, 40, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 70, this.y + 10, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 70, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
        };
        return Wolke;
    }());
    Aufgabe5.Wolke = Wolke;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=wolke.js.map
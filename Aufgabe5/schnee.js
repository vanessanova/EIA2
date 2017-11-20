var Aufgabe5;
(function (Aufgabe5) {
    var Schnee = (function () {
        function Schnee() {
            this.setStart();
            this.color = "#FFFFFF";
        }
        Schnee.prototype.moveanddraw = function () {
            this.move();
            this.draw();
        };
        Schnee.prototype.move = function () {
            this.x += 0;
            this.y += 2;
        };
        Schnee.prototype.setStart = function () {
            this.x = 0 + Math.random() * 800;
            this.y = 0 + Math.random() * 600;
        };
        Schnee.prototype.draw = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#FFFFFF";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = "#F1F7FA";
            Aufgabe5.crc2.fill();
        };
        return Schnee;
    }());
    Aufgabe5.Schnee = Schnee;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=schnee.js.map
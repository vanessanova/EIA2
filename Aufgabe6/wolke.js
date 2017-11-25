var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe6;
(function (Aufgabe6) {
    var Wolke = (function (_super) {
        __extends(Wolke, _super);
        function Wolke() {
            _super.call(this);
            this.setColor();
            this.setStart();
        }
        Wolke.prototype.moveanddraw = function () {
            this.move();
            this.draw();
        };
        Wolke.prototype.move = function () {
            this.x += Math.random() + 1;
            if (this.x > 810) {
                this.setStart();
            }
        };
        Wolke.prototype.setStart = function () {
            this.x = 0 + Math.random() * 800;
            this.y = 0 + Math.random() * 100 + 20;
        };
        Wolke.prototype.draw = function () {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 40, this.y, 50, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y - 20, 50, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 20, this.y, 50, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y + 30, 40, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 70, this.y + 10, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 70, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
        };
        Wolke.prototype.setColor = function () {
            this.color = "#ffffff";
        };
        return Wolke;
    }(Aufgabe6.MovingObjects));
    Aufgabe6.Wolke = Wolke;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=wolke.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe6;
(function (Aufgabe6) {
    var Wolke2 = (function (_super) {
        __extends(Wolke2, _super);
        function Wolke2() {
            _super.call(this);
            this.win = false;
            this.setColor();
            this.setStart();
        }
        Wolke2.prototype.update = function () {
            this.draw();
        };
        Wolke2.prototype.moveWolke = function (m) {
            if (this.x > 810) {
                this.win = true;
            }
        };
        Wolke2.prototype.setStart = function () {
            this.x = 0;
            this.y = 0;
        };
        Wolke2.prototype.draw = function () {
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
        Wolke2.prototype.setColor = function () {
            this.color = "#FFFFF";
        };
        return Wolke2;
    }(Aufgabe6.MovingObjects));
    Aufgabe6.Wolke2 = Wolke2;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=wolkemove.js.map
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
            this.win = false;
            this.setColor();
            this.setStart();
        }
        Wolke.prototype.update = function () {
            this.draw();
        };
        Wolke.prototype.moveWolke = function (m) {
            this.x += m;
            if (this.x > 810) {
                this.win = true;
            }
        };
        Wolke.prototype.setStart = function () {
            this.x = 0;
            this.y = 0;
        };
        Wolke.prototype.draw = function () {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 30, this.y + 500, 25, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y + 500 - 50, 45, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 30, this.y + 490, 35, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y + 500 + 40, 45, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 30, this.y + 490, 35, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 30, this.y + 500, 25, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 40, this.y + 530, 25, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 40, this.y + 530, 25, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#D358F7";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#00000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#00000";
            Aufgabe6.crc2.fill();
            //Augen
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 20, this.y + 460 + 5, 5, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "black";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 25, this.y + 460 + 5, 5, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "black";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 10, this.y + 480 + 10, 10, 0, 1 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "black";
            Aufgabe6.crc2.fill();
        };
        Wolke.prototype.setColor = function () {
            this.color = "#D358F7";
        };
        return Wolke;
    }(Aufgabe6.MovingObjects));
    Aufgabe6.Wolke = Wolke;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=wolke.js.map
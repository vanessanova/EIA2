var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe6;
(function (Aufgabe6) {
    var Schnee = (function (_super) {
        __extends(Schnee, _super);
        function Schnee() {
            _super.call(this);
            this.setColor();
            this.setStart();
        }
        Schnee.prototype.moveanddraw = function () {
            this.move();
            this.draw();
        };
        Schnee.prototype.move = function () {
            this.x += 0;
            this.y += 2;
            if (this.y > 600) {
                this.setStart();
            }
        };
        Schnee.prototype.setStart = function () {
            this.x = 0 + Math.random() * 800;
            this.y = 0 + Math.random() * 600;
        };
        Schnee.prototype.draw = function () {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#FFFFFF";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#F1F7FA";
            Aufgabe6.crc2.fill();
        };
        Schnee.prototype.setColor = function () {
            this.color = "#ffffff";
        };
        return Schnee;
    }(Aufgabe6.MovingObjects));
    Aufgabe6.Schnee = Schnee;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=schnee.js.map
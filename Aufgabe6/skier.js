var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe6;
(function (Aufgabe6) {
    var Skier = (function (_super) {
        __extends(Skier, _super);
        function Skier(_x, _y) {
            _super.call(this);
            this.setStart();
        }
        Skier.prototype.moveanddraw = function () {
            this.move();
            this.draw();
        };
        Skier.prototype.move = function () {
            this.x += Math.random() * 2 + 2.5; // hier experimentieren um
            this.y += Math.random() * 2 + 3; // andere Bewegungsmuster zu finden
            if (this.y > 650) {
                this.setStart();
            }
        };
        Skier.prototype.setStart = function () {
            this.x = Math.random() * 290;
            this.y = 230;
        };
        Skier.prototype.draw = function () {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y);
            Aufgabe6.crc2.lineTo(this.x + 20, this.y + 10);
            Aufgabe6.crc2.strokeStyle = "#400000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y);
            Aufgabe6.crc2.lineTo(this.x + 15, this.y + 15);
            Aufgabe6.crc2.strokeStyle = "#400000";
            Aufgabe6.crc2.stroke();
            //K�rper   
            Aufgabe6.crc2.fillStyle = this.colorBody;
            Aufgabe6.crc2.fillRect(this.x, this.y - 10, 10, 15);
            //Kopf
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = this.colorHead;
            Aufgabe6.crc2.fill();
        };
        return Skier;
    }(Aufgabe6.MovingObjects));
    Aufgabe6.Skier = Skier;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=skier.js.map
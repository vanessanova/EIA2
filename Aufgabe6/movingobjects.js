var Aufgabe6;
(function (Aufgabe6) {
    var MovingObjects = (function () {
        function MovingObjects() {
            console.log("Create shape");
            this.setColor();
            this.setStart();
        }
        MovingObjects.prototype.drawandmove = function () {
            this.move();
            this.draw();
        };
        MovingObjects.prototype.draw = function () {
            //Unbef�llt
        };
        MovingObjects.prototype.move = function () {
            //Unbef�llt
        };
        MovingObjects.prototype.setStart = function () {
            //Unbef�llt
        };
        MovingObjects.prototype.setColor = function () {
            //Unbef�llt;
        };
        return MovingObjects;
    }());
    Aufgabe6.MovingObjects = MovingObjects;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=movingobjects.js.map
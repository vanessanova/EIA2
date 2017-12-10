var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", eingabe);
    function eingabe() {
        var Zahl = prompt("Bitte Anzahl der Quadrate zwischen 10 und 100 angeben");
        var ZahlNumb = parseInt(Zahl); //die Funktion ParseInt wandelt einen String in eine Zahl um
        if (ZahlNumb >= 10 && ZahlNumb <= 100) {
            for (var i = 0; i < ZahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 30, 30);
            }
        }
        else {
            window.alert("Eingabe ist falsch bitte erneut probieren"); //Warnung bei falscher Eingabe und neu laden der Funktion
            eingabe();
        }
    }
    //Funktion K�stchen Zeichnen
    function drawRect(_x, _y, _color, _width, _height) {
        var div = document.createElement("div"); //div erstellen
        div.style.width = _width.toString(); //Returns a String of an object
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString(); //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color; //zuf�llige Farbe
        document.body.appendChild(div); //html ELement in den Code einf�gen lassen
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Quadrat.js.map
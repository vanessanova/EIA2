var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
        { art: "Baumart", name: "Nordmanntanne", preis: 20.00 },
        { art: "Baumart", name: "Rotfichte", preis: 22.00 },
        { art: "Baumart", name: "Douglasie", preis: 26.00 },
        { art: "Halter", name: "Holz-St�nder", preis: 13.95 },
        { art: "Halter", name: "Plastik-St�nder", preis: 15.95 },
        { art: "Halter", name: "Metall-St�nder", preis: 61.95 },
        { art: "Beleuchtung", name: "Lichterkette warmwei�", preis: 20.95 },
        { art: "Beleuchtung", name: "Lichterkette kaltwei�", preis: 15.99 },
        { art: "Beleuchtung", name: "Lichterkette mit Kerzen", preis: 12.95 },
        { art: "Deko", name: "Kugel, rot", preis: 0.99 },
        { art: "Deko", name: "Kugel, blau", preis: 0.99 },
        { art: "Deko", name: "Kugel, silber", preis: 1.95 },
        { art: "Deko", name: "Kugel, goldglitzer", preis: 1.55 },
        { art: "Deko", name: "Holz-Anh�nger", preis: 5.10 },
        { art: "Deko", name: "Metallsilber-Anh�nger", preis: 2.65 },
        { art: "Deko", name: "Metallgold-Anh�nger", preis: 1.35 },
        { art: "Deko", name: "Stern-Anh�nger", preis: 10.00 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 2.99 },
    ];
    Aufgabe10.b = [];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].art == "Beleuchtung") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.b.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Aufgabe10_2.js.map
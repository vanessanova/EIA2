namespace Aufgabe10 {

    export interface Bestellposten {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
        { art: "Baumart", name: "Nordmanntanne", preis: 20.00 }, //preis pro meter
        { art: "Baumart", name: "Rotfichte", preis: 22.00 },//preis pro meter
        { art: "Baumart", name: "Douglasie", preis: 26.00 },//preis pro meter
        { art: "Halter", name: "Holz-St‰nder", preis: 13.95 },
        { art: "Halter", name: "Plastik-St‰nder", preis: 15.95 },
        { art: "Halter", name: "Metall-St‰nder", preis: 61.95 },
        { art: "Beleuchtung", name: "Lichterkette warmweiﬂ", preis: 20.95 },
        { art: "Beleuchtung", name: "Lichterkette kaltweiﬂ", preis: 15.99 },
        { art: "Beleuchtung", name: "Lichterkette mit Kerzen", preis: 12.95 },
        { art: "Deko", name: "Kugel, rot", preis: 0.99 },
        { art: "Deko", name: "Kugel, blau", preis: 0.99 },
        { art: "Deko", name: "Kugel, silber", preis: 1.95 },
        { art: "Deko", name: "Kugel, goldglitzer", preis: 1.55 },
        { art: "Deko", name: "Holz-Anh‰nger", preis: 5.10 },
        { art: "Deko", name: "Metallsilber-Anh‰nger", preis: 2.65 },
        { art: "Deko", name: "Metallgold-Anh‰nger", preis: 1.35 },
        { art: "Deko", name: "Stern-Anh‰nger", preis: 10.00 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 2.99 },
    ];
    
    
    export let b: string[][] = [];
    
    for (var i: number = 0; i < posten.length; i++) {
        

        if (posten[i].art == "Beleuchtung") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           b.push(temp);
        }
    }
}
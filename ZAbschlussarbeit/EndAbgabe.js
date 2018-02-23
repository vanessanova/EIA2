/*
Aufgabe: 5, Skifahrer
Name: Vanessa
Matrikel:
Datum: 08.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    // export let crc2: CanvasRenderingContext2D;
    var ski = [];
    var schnee = [];
    var wolke = [];
    var wolkeSpieler;
    var object = [];
    var fragenDa = [];
    var frage1 = {
        frage: "Wer sind die Hauptcharaktere bei Adventure Time",
        af: ["J�rgen & Sven", "Fiona & Cake"],
        ar: "Finn & Jake"
    };
    var frage2 = {
        frage: "In wen ist Finn verliebt?",
        af: ["Iceking", "Marceline"],
        ar: "Princess Bubblegum"
    };
    var frage3 = {
        frage: "Was ist Marceline?",
        af: ["Fee", "Mensch"],
        ar: "Vampier"
    };
    var frage4 = {
        frage: "Als was Beobachtet Iceking Finn&Jake in Staffel 2, Folge 3 ?",
        af: ["Kuh", "Busch"],
        ar: "Pferd"
    };
    var frage5 = {
        frage: "Welche Waffe benutzt Finn?",
        af: ["Nudelholz", "Pinkerdildo"],
        ar: "Schwert"
    };
    var frage6 = {
        frage: "Wer ist die Freundin von Jake?",
        af: ["Lumpy Space Princess", "Flammenprincess"],
        ar: "Lady rainicorn"
    };
    var frage7 = {
        frage: "Was ist BMO?",
        af: ["Unsichtbares Bootmobil", "Schwert"],
        ar: "Gameboy"
    };
    var frage8 = {
        frage: "Welche Farbe hat Jake?",
        af: ["Orange", "Rosa"],
        ar: "Gelb"
    };
    var frage9 = {
        frage: "Wie heisst der lieblings Pinguin vom Iceking?",
        af: ["Walter", "Tommy"],
        ar: "Gunther"
    };
    var frage10 = {
        frage: "Welches Instrument spielt Jake?",
        af: ["Klavier", "Fl�te"],
        ar: "Violine"
    };
    //Funktion Canvas    
    window.addEventListener("load", main);
    var fragenDaten = [frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8, frage9, frage10];
    var image;
    //Main function
    function main() {
        alert("Hilf Lumpy ueber die Wiese zu fliegen.\n\n Beantworte 5 Fragen zu der Serie Adventure Time richtig \n\n und sieh wie Lumpy fliegt.\n\nViel Spass!");
        var canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe6.crc2 = canvas.getContext("2d");
        antworten();
        //Schneeflocken
        for (var i = 0; i < 300; i++) {
            var f = new Aufgabe6.Schnee();
            object.push(f);
        }
        wolkeSpieler = new Aufgabe6.Wolke();
        //Zeichnen von Hintergr     
        //Himmel    
        Aufgabe6.crc2.fillStyle = "#CEECF5";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berg1    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 620);
        Aufgabe6.crc2.lineTo(600, 600);
        Aufgabe6.crc2.lineTo(300, 50);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#D8D8D8";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        //Berg2    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(400, 600);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(600, 120);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#c2c2c2";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#c2c2c2";
        Aufgabe6.crc2.fill();
        //Berg3    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 700);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(650, 160);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#A4A4A4";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#A4A4A4";
        Aufgabe6.crc2.fill();
        //Berg4    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 700);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(300, 50);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#c2c2c2";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#c2c2c2";
        Aufgabe6.crc2.fill();
        //Gras   
        Aufgabe6.crc2.fillStyle = "#ACFA58";
        Aufgabe6.crc2.fillRect(0, 500, 800, 350);
        //Sonnne    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(80, 90, 40, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#F7D358";
        Aufgabe6.crc2.fill();
        //Wolke0    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(720, 70, 25, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(710, 80, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(685, 75, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Wolke1    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(500, 120, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(490, 130, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(480, 125, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Wolke2    
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(520, 120, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(510, 130, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(505, 125, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(530, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Wolke   
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(320, 120, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(260, 110, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(300, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(280, 125, 10, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(270, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(330, 140, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(345, 145, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(360, 145, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(370, 130, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(385, 150, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        for (var i = 0; i < 6; i++) {
            var x = 10 + Math.random() * 170;
            var y = 380 + Math.random() * 170;
        }
        image = Aufgabe6.crc2.getImageData(0, 0, 800, 600);
        animiere();
    }
    function moveWolkeForward() {
        wolkeSpieler.moveWolke(160);
        antworten();
    }
    function moveWolkeBack() {
        wolkeSpieler.moveWolke(-160);
    }
    function antworten() {
        var inhalt = document.getElementById("content");
        var random = Math.round(Math.random() * 2);
        var x = 0;
        var random2 = Math.round(Math.random() * 2);
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.background = "pink";
        div.style.width = "30%";
        div.style.height = "5em";
        div.style.top = 10 + "em";
        div.style.left = "35%";
        div.id = "fr";
        div.innerHTML = fragenDaten[random2].frage;
        inhalt.appendChild(div);
        console.log(random);
        for (var i = 0; i < 3; i++) {
            if (random != i) {
                var div = document.createElement("div");
                div.style.position = "absolute";
                div.style.background = "pink";
                div.style.width = "30%";
                div.style.height = "5em";
                div.style.top = 20 + (i * 6) + "em";
                div.style.left = "35%";
                div.id = "f" + i;
                div.style.font = 'Amatic SC';
                if (random == 1) {
                    div.innerHTML = fragenDaten[random2].af[i - x];
                    x = 1;
                }
                else if (random == 2) {
                    div.innerHTML = fragenDaten[random2].af[i];
                }
                else if (random == 0) {
                    div.innerHTML = fragenDaten[random2].af[i - 1];
                }
                div.addEventListener("click", moveWolkeBack);
                inhalt.appendChild(div);
            }
            else {
                var inhalt = document.getElementById("content");
                var div = document.createElement("div");
                div.style.position = "absolute";
                div.style.background = "pink";
                div.style.width = "30%";
                div.style.height = "5em";
                div.style.top = 20 + (i * 6) + "em";
                div.style.left = "35%";
                div.id = "r" + i;
                div.addEventListener("click", moveWolkeForward);
                div.innerHTML = fragenDaten[random2].ar;
                inhalt.appendChild(div);
            }
        }
    }
    function animiere() {
        Aufgabe6.crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        Aufgabe6.crc2.putImageData(image, 0, 0);
        //for-Schleife Schnee
        for (var i = 0; i < schnee.length; i++) {
            var s = schnee[i];
            s.moveanddraw();
            if (s.y > 600) {
                s.setStart();
            }
            //for-Schleife Wolken
            for (var i_1 = 0; i_1 < wolke.length; i_1++) {
                var s_1 = wolke[i_1];
                s_1.update();
                if (s_1.x > 800) {
                    s_1.setStart();
                }
            }
        }
        //Animation MovigObjects
        for (var i = 0; i < object.length; i++) {
            var s = object[i];
            s.drawandmove();
        }
        wolkeSpieler.update();
        if (wolkeSpieler.win == true) {
            alert("Danke das du Lumpy geholfen hast.");
            alert("Spiel doch nochmal, lade die Seite einfach neu.");
            location.reload();
        }
        window.setTimeout(animiere, 20);
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=EndAbgabe.js.map
/*
Aufgabe: 5, Skifahrer
Name: Vanessa
Matrikel: 
Datum: 08.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe6 {

    // export let crc2: CanvasRenderingContext2D; 
    let ski: Skier[] = [];
    let schnee: Schnee[] = [];         
    let wolke: Wolke[] = [];
    let wolkeSpieler: Wolke;
    let object: MovingObjects[] = [];
    let fragenDa:number[]=[];
    interface Fragen {
        frage: string;
        af: string[];
        ar: string;
    }

    let frage1: Fragen = {
        frage: "Wer sind die Hauptcharaktere bei Adventure Time",
        af: ["Jürgen & Sven", "Fiona & Cake"],
        ar: "Finn & Jake"
    };

    let frage2: Fragen = {
        frage: "In wen ist Finn verliebt?",
        af: ["Iceking", "Marceline"],
        ar: "Princess Bubblegum"
    };
    let frage3: Fragen = {
        frage: "Was ist Marceline?",
        af: ["Fee", "Mensch"],
        ar: "Vampir"
    };

    let frage4: Fragen = {
        frage: "Als was Beobachtet Iceking Finn&Jake in Staffel 2, Folge 3 ?",
        af: ["Kuh", "Busch"],
        ar: "Pferd"
    };

    let frage5: Fragen = {
        frage: "Welche Waffe benutzt Finn?",
        af: ["Nudelholz", "Pinkerdildo"],
        ar: "Schwert"
    };

    let frage6: Fragen = {
        frage: "Wer ist die Freundin von Jake?",
        af: ["Lumpy Space Princess", "Flammenprincess"],
        ar: "Lady rainicorn"
    };

    let frage7: Fragen = {
        frage: "Was ist BMO?",
        af: ["Unsichtbares Bootmobil", "Schwert"],
        ar: "Gameboy"
    };

    let frage8: Fragen = {
        frage: "Welche Farbe hat Jake?",
        af: ["Orange", "Rosa"],
        ar: "Gelb"
    };
    let frage9: Fragen = {
        frage: "Wie heisst der lieblings Pinguin vom Iceking?",
        af: ["Walter", "Tommy"],
        ar: "Gunther"
    };
    let frage10: Fragen = {
        frage: "Welches Instrument spielt Jake?",
        af: ["Klavier", "Flöte"],
        ar: "Violine"
    };

    //Funktion Canvas    
    window.addEventListener("load", main);

    let fragenDaten: Fragen[] = [frage1, frage2, frage3, frage4, frage5, frage6, frage7, frage8, frage9, frage10];

    var image: any;

    //Main function
    function main(): void {
        alert("Hilf Lumpy ueber die Wiese zu fliegen.\n\n Beantworte 5 Fragen zu der Serie Adventure Time richtig \n\n und sieh wie Lumpy fliegt.\n\nViel Spass!");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        antworten();
      
        
        //Schneeflocken
          for (let i: number = 0; i < 300; i++) {
              let f: Schnee = new Schnee();
                object.push(f);
          }

        wolkeSpieler = new Wolke();


        //Zeichnen von Hintergr     
        //Himmel    
        crc2.fillStyle = "#CEECF5";
        crc2.fillRect(0, 0, 800, 600);

        //Berg1    
        crc2.beginPath();
        crc2.moveTo(0, 620);
        crc2.lineTo(600, 600);
        crc2.lineTo(300, 50);
        crc2.closePath();
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();

        //Berg2    
        crc2.beginPath();
        crc2.moveTo(400, 600);
        crc2.lineTo(800, 600);
        crc2.lineTo(600, 120);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();

        //Berg3    
        crc2.beginPath();
        crc2.moveTo(500, 700);
        crc2.lineTo(800, 600);
        crc2.lineTo(650, 160);
        crc2.closePath();
        crc2.strokeStyle = "#A4A4A4";
        crc2.stroke();
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();

        //Berg4    
        crc2.beginPath();
        crc2.moveTo(500, 700);
        crc2.lineTo(800, 600);
        crc2.lineTo(300, 50);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();


        //Gras   
        crc2.fillStyle = "#ACFA58";
        crc2.fillRect(0, 500, 800, 350);
        //Sonnne    
        crc2.beginPath();
        crc2.arc(80, 90, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7D358";
        crc2.fill();

        //Wolke0    
        crc2.beginPath();
        crc2.arc(720, 70, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(710, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(685, 75, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Wolke1    
        crc2.beginPath();
        crc2.arc(500, 120, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(490, 130, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(480, 125, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Wolke2    
        crc2.beginPath();
        crc2.arc(520, 120, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(510, 130, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(505, 125, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(530, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Wolke   
        crc2.beginPath();
        crc2.arc(320, 120, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(260, 110, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(300, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(280, 125, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(270, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(330, 140, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(345, 145, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(360, 145, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(370, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(385, 150, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        for (let i: number = 0; i < 6; i++) {

            let x: number = 10 + Math.random() * 170;
            let y: number = 380 + Math.random() * 170;


        }

        image = crc2.getImageData(0, 0, 800, 600);
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
var inhalt: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
        let random: number = Math.round(Math.random() * 2);
        let x: number = 0;
       
        let random2: number = Math.round(Math.random() * 2);
        var div: HTMLDivElement = document.createElement("div");
        div.style.position = "absolute";
        div.style.background = "pink";
        div.style.width = "30%";
        div.style.height = "5em";
        div.style.top = 13+ "em";
        div.style.left = "35%";
        div.id = "fr";
        div.innerHTML = fragenDaten[random2].frage;
        inhalt.appendChild(div);

        console.log(random);
        for (let i: number = 0; i < 3; i++) {
            if (random != i) {
                

                var div: HTMLDivElement = document.createElement("div");
                div.style.position = "absolute";
                div.style.background = "#F8E0E6";
                div.style.cursor= "pointer"
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
                var inhalt: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

                var div: HTMLDivElement = document.createElement("div");
                div.style.position = "absolute";
                div.style.cursor= "pointer"
                div.style.background = "#F8E0E6";
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

        crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        crc2.putImageData(image, 0, 0);


        //for-Schleife Schnee
                   for (let i: number = 0; i < schnee.length; i++) {
                  let s: Schnee = schnee[i];
                   s.moveanddraw();

                   if (s.y > 600) {
           s.setStart();
                       }
                       
            
        //for-Schleife Wolken
        for (let i: number = 0; i < wolke.length; i++) {
            let s: Wolke = wolke[i];
            s.update();

            if (s.x > 800) {
                s.setStart();
            }
        }
}
        //Animation MovigObjects
                for (let i: number = 0; i < object.length; i ++) {
                    let s: MovingObjects = object[i];
                    s.drawandmove()       }
            

            
        wolkeSpieler.update();
        if(wolkeSpieler.win == true){
               alert("Danke das du Lumpy geholfen hast."); 
            alert("Spiel doch nochmal, lade die Seite einfach neu.");
            location.reload();
        }
        window.setTimeout(animiere, 20);
    }}
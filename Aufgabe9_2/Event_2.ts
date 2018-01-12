

namespace Aufgabe9_2 {

    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeyDown);
    let thisLetter: string;
    let alphabet: string;

    function init(): void {


        for (let i = 65; i <= 90; i++) {
            createLetterSelectionBox(String.fromCharCode(i));
        }

        createLetter();
    }



    //Buchstaben über Brief
    function createLetterSelectionBox(_alphabet: string): void {

        let div: HTMLDivElement = document.createElement("div");

        div.innerText = _alphabet;
        div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        div.style.border = "3px black";
        div.style.width = "2%";
        div.style.height = "4%";
        div.style.margin = "9.5px";
        div.style.fontSize = "20px";
        div.style.display = "inline";
        div.style.textAlign = "center";
        div.id = _alphabet;
        div.className = "letter";
  
        div.addEventListener("click", handleMousedown);
        document.body.appendChild(div);

    }
    //Brief
    function createLetter(): void {

        let letter: HTMLDivElement = document.createElement("div");

        letter.style.backgroundColor = "#E3CEF6";
        letter.style.border = "3px black"
        letter.style.width = "90%";
        letter.style.height = "50%";
        letter.style.margin = "20px";

        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    }


    //MouseEvent
    function handleMousedown(_event: MouseEvent): void {

        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.color = "white";
        

        thisLetter = click.id;

        let divs: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letter");

        for (let i: number = 0; i < divs.length; i++) {
            if (thisLetter != divs[i].id) {
                divs[i].style.color = "black";
            }
        }
    }

    //KeyEvent
    function handleKeyDown(_event: KeyboardEvent): void {

        if (_event.keyCode > 64 && _event.keyCode < 91 || _event.keyCode == 16 || _event.keyCode == 20) {
            thisLetter = String.fromCharCode(_event.keyCode);
        } else {
            alert("Es sind nur Buchstaben erlaubt. Sorry :D");
        }
    }

    //Buchstaben
    function setLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");

        box.innerText = thisLetter;
        box.style.color = "white";
        box.style.fontSize = "20px";
        box.style.border = "2px solid white";
        box.style.padding = "2px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";

        box.addEventListener("click", setLetters);
        document.body.appendChild(box);

        let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }


    function removeLetterbyAlt(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        else {
            let remove: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(remove);
        }
    }
}
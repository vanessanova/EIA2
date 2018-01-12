var Aufgabe9_2;
(function (Aufgabe9_2) {
    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeyDown);
    var thisLetter;
    var alphabet;
    function init() {
        for (var i = 65; i <= 90; i++) {
            createLetterSelectionBox(String.fromCharCode(i));
        }
        createLetter();
    }
    //Buchstaben �ber Brief
    function createLetterSelectionBox(_alphabet) {
        var div = document.createElement("div");
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
    function createLetter() {
        var letter = document.createElement("div");
        letter.style.backgroundColor = "#E3CEF6";
        letter.style.border = "3px black";
        letter.style.width = "90%";
        letter.style.height = "50%";
        letter.style.margin = "20px";
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    }
    //MouseEvent
    function handleMousedown(_event) {
        var click = _event.target;
        click.style.color = "white";
        thisLetter = click.id;
        var divs = document.getElementsByClassName("letter");
        for (var i = 0; i < divs.length; i++) {
            if (thisLetter != divs[i].id) {
                divs[i].style.color = "black";
            }
        }
    }
    //KeyEvent
    function handleKeyDown(_event) {
        if (_event.keyCode > 64 && _event.keyCode < 91 || _event.keyCode == 16 || _event.keyCode == 20) {
            thisLetter = String.fromCharCode(_event.keyCode);
        }
        else {
            alert("Es sind nur Buchstaben erlaubt. Sorry :D");
        }
    }
    //Buchstaben
    function setLetters(_event) {
        var box = document.createElement("div");
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
        var clicking = _event.target;
    }
    function removeLetterbyAlt(_event) {
        if (_event.altKey == false)
            return;
        else {
            var remove = _event.target;
            document.body.removeChild(remove);
        }
    }
})(Aufgabe9_2 || (Aufgabe9_2 = {}));
//# sourceMappingURL=Event_2.js.map
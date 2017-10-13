function Aloha() {
    var button: string;
    var person = prompt("Whats your Name?", "");
    if (person == null || person == "") {
        
    } else {
        button = "Aloha " + person + " !  Whats up?";
    }
    document.getElementById("button").innerHTML = button;
}
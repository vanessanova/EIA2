/*
Aufgabe:7
Name: Vanessa
Matrikel:
Datum: 08.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("create a new record (n), request(a) oder quit the Programm (s)\nn,a oder s input");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Input (seperated with Komma) von\nmatriculationnumber, Name, First name, Age, Gender (0 (M) oder 1(F)) und Comment");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("entry of matriculationnumber"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var splitted = _input.split(",");
        if (parseInt(splitted[0]) == NaN) {
            return "matriculation number wrong number";
        }
        var geschlecht = parseInt(splitted[4]) == 1; //(splitted[4] === "true");
        var student = {
            matriculationnumber: parseInt(splitted[0]),
            Name: splitted[1],
            Firstname: splitted[2],
            Age: parseInt(splitted[3]),
            Gender: geschlecht,
            Comment: splitted[5]
        };
        students.push(student);
        return "Eingegebene Daten: " + "\nmatriculation number: " + student.matriculationnumber + "\nName: " + student.Name + "\nFirst name: " + student.Firstname + "\nAge: " + student.Age + "\nGender: " + student.Gender + "\nComment: " + student.Comment;
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matriculationnumber == _matrikel) {
                return "Student: " + "\nmatriculation number: " + students[i].matriculationnumber + "\nName: " + students[i].Name + "\nFirst name: " + students[i].Firstname + "\nAge: " + students[i].Age + "\nGender: " + students[i].Gender + "\nComment: " + students[i].Comment;
            }
            else {
                return "Matrikelnummer nicht gespeichert";
            }
        }
        return;
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=StudieVZ.js.map
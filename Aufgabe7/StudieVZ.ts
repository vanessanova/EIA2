/*
Aufgabe:7
Name: Vanessa
Matrikel: 
Datum: 08.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    interface StudentData {
        
        matriculationnumber: number;
        Name: string;
        Firstname: string;
        Age: number;
        Gender: boolean;
        Comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("create a new record (n), request(a) oder quit the Programm (s)\nn,a oder s input");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Input (seperated with Komma) von\nmatriculationnumber, Name, First name, Age, Gender (0 (M) oder 1(F)) und Comment");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("entry of matriculationnumber"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let splitted: string[] = _input.split(",");

        if (parseInt(splitted[0]) == NaN) {
            return "matriculation number wrong number";
        }
        
        
        var geschlecht: boolean = parseInt(splitted[4]) == 1;   //(splitted[4] === "true");

        let student: StudentData = {
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
    
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
            
            if (students[i].matriculationnumber == _matrikel) {
                return "Student: " + "\nmatriculation number: " + students[i].matriculationnumber + "\nName: " + students[i].Name + "\nFirst name: " + students[i].Firstname + "\nAge: " + students[i].Age + "\nGender: " + students[i].Gender + "\nComment: " + students[i].Comment;
            }
            
                else {
                return "Matrikelnummer nicht gespeichert";
                }
        }

        return;
    }
}
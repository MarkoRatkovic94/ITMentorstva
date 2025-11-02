// Napraviti funkciju login
// Ako se unese username "admin" i lozinka "admin" vratiti true
// Ako se unese bilo sta drugo, ispisati false

let userName = prompt("Unesite vase korisnicko ime").toLowerCase();
let password = prompt("Unesite vasu lozinku").toLowerCase();


function login(username, pass)
{
    if(username === "admin" && pass === "admin") {
        return true;
    } else {
        return false;
    }
}

let result = login(userName, password);
console.log(result);

/**
 * 1. Pozdravna funkcija
 *
 *    - Napravi pozdravi(ime) koja ispisuje: „Zdravo, Marko!“
 */

// let name = "Marko";
//
// function pozdravi(name) {
//     console.log("Zdravo, "+name);
// }
//
// pozdravi(name);





/**
 * 2. Provera punoletstva
 *
 *    - Napravi proveriGodine(godine) → ispis „Punoletan/Maloletan“.
 */

// let age = 15;
//
// function proveriGodine(age) {
//     if(age < 18) {
//         console.log("Maloletan");
//     } else {
//         console.log("Punoletan");
//     }
// }
//
// proveriGodine(31);





/**
 * 3. Zbir elemenata niza
 *
 *    - Napravi zbirBrojeva(niz) i pozovi sa [2,4,6,8].
 *
 *    --- (Oko ovoga sam se malo mucio a zapravo nije nista tesko,
 *    koristio sam chatgpt da mi da neki hint i malo google, bez da mi da resenje koda odma)
 */

// let array = [2,4,6,8];
//
// let sum = 0;
//
// function zbirBrojeva(array) {
//
//     for(let number of array) {
//         sum += number;
//     }
//     console.log(sum);
// }
// zbirBrojeva(array);





/**
 * 4. Najveći broj u nizu
 *
 *    - Napravi maxBroj(niz) i testiraj sa [3, 11, 2, 9].
 *
 *    --- Ovde sam morao da se pomognem sa google-om
 */

// let array = [3, 11, 2, 9];
// let largestNumber = array[0];
//
// function maxBroj(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > largestNumber) {
//             largestNumber = array[i];
//         }
//     }
//     console.log(largestNumber)
// }
//
// maxBroj(array);





/**
 * 5. Brojanje parnih brojeva
 *
 *    - Napravi prebrojParne(niz) → vrati koliko ima parnih u nizu.
 */

// let array = [2,5,7,11,12,15,20,23,25,29,30,36,42];
//
// let evenNumbers = 0;
//
// function prebrojParne(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 === 0) {
//             evenNumbers += 1;
//         }
//     }
//
//     console.log(evenNumbers);
// }
//
// prebrojParne(array);





/**
 * 6. Filtriraj veće od 5
 *
 *    - Napravi veciOdPet(niz) → vrati novi niz.
 */

// let array = [1,2,4,5,7,9,15,22,30,100];
//
//
// function veciOdPet(array) {
//
//     let numbersBiggerThanFive = [];
//
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > 5) {
//             numbersBiggerThanFive.push(array[i]);
//         }
//     }
//     console.log(numbersBiggerThanFive);
// }
//
// veciOdPet(array);





/**
 * 7. Obrni string
 *
 *    - Napravi obrniString(text) → vrati obrnut string.
 *
 *    --- Pripomogo sam se sa google-om
 */

// let text = "Pozdrav Tomo";
//
// function obrniString(text) {
//     console.log(text.split(" ").reverse().join(" "));
// }
//
// obrniString(text);





/**
 * 8. Provera palindroma
 *
 *    - Napravi palindrom(text) → true/false (ignoriši razmake i velika/mala slova).
 *
 *    --- Pripomogao sam se malo sa google-om jbg :((
 */

// let text = "Ana voli Milovana".toLowerCase().split(" ").join("");
// let textWithoutSpaces = text.split("").reverse().join("");
//
// function palindrom(text) {
//     if(textWithoutSpaces === text) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
//
// palindrom(text);





/**
 * 9. Formatiranje korisnika (objekat)
 *
 *    - Napravi formatUser(user) → vrati string „Ime - email“. Prosledi objekat u pozivu.
 */

// let user = {
//     ime: "Marko",
//     prezime: "Ratkovic",
//     godiste: 1994,
//     email: "mareratkovic94@gmail.com"
// }
//
//
// function formatUser(user) {
//     return (user.ime+" - "+user.email);
// }
//
// formatUser(user);





/**
 * 10. Sortiranje niza objekata
 *
 *     - Imaš niz proizvoda {name, price}. Sortiraj po price rastuće.
 *
 *     --- Pomogao se sa google-om
 */

// let products = [{
//     name: "banana",
//     price: 150
// },
//     {
//         name: "limun",
//         price: 80
//     },
//     {
//         name: "plazma",
//         price: 330
//     },
//     {
//         name: "sunka",
//         price: 110
//     },
//     {
//         name: "pizza",
//         price: 160
//     },
//     {
//         name: "coca cola",
//         price: 100
//     }];
//
//
// products.sort(function(a, b) {
//     return parseFloat(a.price) - parseFloat(b.price);
// });
//
// console.log(products);





/**
 * 11. DOM: klik brojač
 *
 *     - Na dugme “+1” povećavaj broj u <span> svaki klik
 *
 *     --- Pripomogo se sa chatgpt
 */

// let count = 0;
//
// let countDisplay = document.getElementById("countDisplay");
// let incrementButton = document.getElementById("incrementButton");
//
// incrementButton.addEventListener("click", () => {
//     count++
//     countDisplay.textContent = count;
// });





/**
 * 12. DOM: To-do lista
 *
 *     - Input + dugme “Dodaj” → dodaj <li> u listu.
 */

// let addArticle = document.getElementById("addArticle");
// let article = document.getElementById("article");
// let listOfProducts = document.getElementById("listOfProducts");
//
// addArticle.addEventListener("click", () => {
//     let newArticle = document.createElement("li");
//     newArticle.innerHTML = article.value;
//
//     listOfProducts.append(newArticle);
// });





/**
 * 13. DOM: brisanje iz liste
 *
 *     - Na svaki <li> dodaj “X” dugme koje briše taj element.
 *
 *     --- Ovde sam sve uradio sve sam, samo sam google-ao za ovu opciju remove()
 */

// let addArticle = document.getElementById("addArticle");
// let article = document.getElementById("article");
// let listOfProducts = document.getElementById("listOfProducts");
//
// addArticle.addEventListener("click", () => {
//     let newArticle = document.createElement("li");
//     newArticle.innerHTML = article.value;
//     let deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "X";
//     deleteButton.addEventListener("click", () => {
//         newArticle.remove();
//     });
//
//     newArticle.append(deleteButton);
//
//     listOfProducts.append(newArticle);
// });





/**
 * 14. DOM: toggle klasa
 *     - Klikom na karticu (div) dodaj/ukloni klasu "active"
 *
 *     --- (Pomogao se sa googleom i chatgpt hintom)
 */

// let div = document.getElementById("firstDiv");
//
// div.addEventListener("click", () => {
//
//     if(!div.classList.contains("active")) {
//
//         div.classList.toggle("active");
//     } else {
//         div.classList.remove("active");
//     }
//
// });





/**
 * 15. DOM: live preview
 *     - Dok kucaš u input, isti tekst se prikazuje u <p> ispod (keyup/input event).
 *
 *     --- Pripomogo sam se google-om
 */

// let input = document.getElementById("myInput");
// let paragraph = document.getElementById("paragraph");
//
// input.addEventListener("input", () => {
//     input.value
//     paragraph.textContent = input.value;
//
// });





/**
 * 16. API: korisnici (console)
 *     - API: https://jsonplaceholder.typicode.com/users
 *       Funkcija ucitajKorisnike() → ispiši name i email u konzoli.
 */

// const usersApi = "https://jsonplaceholder.typicode.com/users";
//
// async function ucitajKorisnike() {
//
//     const response = await fetch(usersApi);
//     const data = await response.json();
//     for(let user of data) {
//         console.log(user.name, user.email);
//     }
// }
//
// ucitajKorisnike();





/**
 * 17. API: postovi u DOM
 *     - API: https://jsonplaceholder.typicode.com/posts
 *       Klik → prikaži prvih 10 title u <ul>.
 */

// let listOfTitles = document.getElementById("listOfTitles");
// let titlesButton = document.getElementById("titlesButton");
//
// const titlesApi = "https://jsonplaceholder.typicode.com/posts";
//
// async function showListOfTitles() {
//
//     const response = await fetch(titlesApi);
//     const data = await response.json();
//         for(let post of data) {
//             if(post.id <= 10) {
//                 let paragraph = document.createElement("li");
//                 paragraph.innerHTML = post.title;
//
//                 listOfTitles.append(paragraph);
//             }
//         }
// }
//
// titlesButton.addEventListener("click", () => {
//     showListOfTitles()
// });





/**
 * 18. API: detalj posta po ID (input)
 *     - Input za ID posta (1–100).
 *       API: https://jsonplaceholder.typicode.com/posts/1 (menjaš ID)
 *       Prikaži title i body. Ako ID ne postoji → poruka.
 *
 *     --- Pripomogo sam se hintom od chatGPT
 */

// let postId = document.getElementById("postId");
// let searchPost = document.getElementById("searchPost");
// let postTitleBody = document.getElementById("postTitleBody");
//
// const postApi = "https://jsonplaceholder.typicode.com/posts/";
//
// async function searchForPost() {
//     postTitleBody.innerHTML = "";
//     const id = postId.value;
//     const response = await fetch(postApi+id);
//     const data = await response.json();
//         if(data.id <= 100) {
//             let title = document.createElement("h1");
//             title.innerHTML = data.title;
//             let paragraph = document.createElement("p");
//             paragraph.innerHTML = data.body;
//
//             postTitleBody.append(title, paragraph);
//         } else {
//             alert("Trazeni ID ne postoji, molimo unesite ID u rasponu od 1-100");
//         }
//
// }
//
// searchPost.addEventListener("click", () => {
//     searchForPost();
// });





/**
 * 19. API: pretraga (filter) korisnika
 *     - Učitaj korisnike jednom, pa u inputu filtriraj po imenu (client-side). Prikaz u DOM.
 *
 * 20. API + error handling + loader
 *     - Dodaj:
 * ● “Loading…” dok traje fetch
 * ● “Greška pri učitavanju” ako fetch padne
 *    Koristi bilo koji od gornjih API-ja.
 *
 *     ----- Ovde nisam mogao da se snadjem morao sam da ukucam u chatGPT da mi da resenje i opet mi
 *           tesko pada kapiranje ovih funkcija unutra funkcija, zasto ide prikaziKorisnike(allUsers)
 *           pa odma ispod ide prikaziKorisnike(users) umesto allUsers sada se koristi users, pominje
 *           se nesto da lokalno ime parametra ne mora da zna spoljasnje ime nize, nista ti ja tu
 *           ne kontam
 */

let userNames = document.getElementById("userNames");
let filterUsers = document.getElementById("filterUsers");

const usersApi = "https://jsonplaceholder.typicode.com/users";
let allUsers = [];

    async function ucitajKorisnike() {

        userNames.textContent = "Loading…";

        try {

            const response = await fetch(usersApi);
            allUsers = await response.json();
            prikaziKorisnike(allUsers);
        } catch (error) {
            userNames.textContent = "Greška pri učitavanju";
        }
    }

    function prikaziKorisnike(users) {
        userNames.innerHTML = "";
        users.forEach(user => {
            let name = document.createElement("h1");
            name.textContent = user.name;
            userNames.appendChild(name);
        });
    }

    filterUsers.addEventListener("input", () => {
        const tekst = filterUsers.value.toLowerCase();
        const filtrirani = allUsers.filter(user => user.name.toLowerCase().includes(tekst));
        prikaziKorisnike(filtrirani);
    });

ucitajKorisnike();








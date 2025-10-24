/** 1. Kreiraj niz numbers sa nekoliko brojeva, a zatim napiši petlju koja prolazi kroz sve brojeve i koristi if-else strukturu da
ispise "Even" za parne i "Odd" za neparne brojeve.*/

let numbers = [3, 7, 15, 25, 35, 50, 62, 84, 100];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i] + " - Even");
    } else {
        console.log(numbers[i] + " - Odd");
    }
}


/** 2. Kreiraj objekat car sa svojstvima make, model, year, i color, a zatim napiši for-in petlju koja prolazi kroz sva
svojstva objekta i koristi switch strukturu da ispisuje poruke specifične za svako svojstvo (npr. "Make: Toyota",
 "Model: Corolla").*/

let car = {
    make: "Ford",
    model: "Focus",
    year: 2015,
    color: "white"
};

for(let key in car) {
    switch(key) {
        case "make":
            console.log("make: Ford");
            break;
        case "model":
            console.log("model: Focus");
            break;
        case "year":
            console.log("year: 2015");
            break;
        case "color":
            console.log("color: white");
            break;
    }
}


/** 3. Kreiraj niz students koji sadrži objekte sa svojstvima name i grade, a zatim napiši for petlju koja prolazi kroz
niz i koristi if-else strukturu da ispise "Pass" za ocene 50 i više, i "Fail" za ocene ispod 50.*/

let students = [
    {name: "Marko", grade: 100},

    {name: "Boris", grade: 60},

    {name: "Ivana", grade: 30},

    {name: "Igor", grade: 1}
];

for(let i = 0; i < students.length; i++) {
    if(students[i].grade >= 50)
    {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}


/** 4. Kreiraj niz grades koji sadrži ocene učenika, a zatim napiši petlju koja prolazi kroz niz i koristi if-else
strukturu da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75,
 i "Fail" za ocene ispod 50.*/

let grades = [100, 1, 67, 33, 96, 92, 55, 50, 4, 34, 99];

for(let i = 0; i < grades.length; i++) {
    if(grades[i] > 90) {
        console.log("Excellent");
    } else if(grades[i] <= 90 && grades[i] > 75) {
        console.log("Good");
    } else if(grades[i] <= 75 && grades[i] >= 50) {
        console.log("Average");
    } else {
        console.log("Fail");
    }
}


/** 5. Kreiraj niz fruits sa nekoliko različitih voća, a zatim napiši petlju koja prolazi kroz niz i koristi switch
strukturu da ispise boju svakog voća (npr. "Apple is red", "Banana is yellow").*/

let fruits = ["banana", "orange", "lemon", "strawberry", "peach", "watermelon"];

for(let i = 0; i < fruits.length; i++)
    switch(fruits[i]) {
        case "banana":
            console.log("Banana is yellow");
            break;
        case "orange":
            console.log("Orange is orange");
            break;
        case "lemon":
            console.log("lemon is yellow");
            break;
        case "strawberry":
            console.log("Strawberry is red");
            break;
        case "peach":
            console.log("Peach is redish");
            break;
        case "watermelon":
            console.log("Watermelon is green");
            break;
}


/** 6. Kreiraj objekat book sa svojstvima title, author, year, i genre, a zatim napiši for-in petlju koja prolazi kroz
sva svojstva objekta i koristi if-else strukturu da ispise poruku "Old book" ako je godina izdanja pre 2000,
 inače "New book".*/

let book = {
    title: "Ana Karenjina",
    author: "Lav Nikolajevic Tolstoj",
    year: 1873,
    genre: "Realisticki roman"
};

for(let key in book) {
    if (key === "year") {
        if (book[key] < 2000) {
            console.log("Old book");
        } else {
            console.log("New book");
        }
    }
}


/** 7. Kreiraj niz employees koji sadrži objekte sa svojstvima name i salary, a zatim napiši for petlju koja prolazi
kroz niz i koristi if-else strukturu da ispise "High salary" za plate iznad 50000, "Medium salary" za plate između
 30000 i 50000, i "Low salary" za plate ispod 30000.*/

let employees = [
    {name: "Marko", salary: 160.000},
    {name: "Petar", salary: 50.000},
    {name: "Ivan", salary: 30.000},
    {name: "Sasa", salary: 20.000}
];

for(let i = 0; i < employees.length; i++) {
    if(employees[i].salary > 50.000) {
        console.log("High salary");
    } else if(employees[i].salary <= 50.000 && employees[i].salary >= 30.000) {
        console.log("Medium salary");
    } else {
        console.log("Low salary");
    }
}


/** 8. Kreiraj niz cities sa nekoliko imena gradova, a zatim napiši petlju koja prolazi kroz niz i koristi switch
strukturu da ispise poruku specifičnu za svaki grad (npr. "Welcome to New York", "Welcome to Los Angeles").*/

let cities = ["Beograd", "Novi Sad", "Nis", "Leskovac", "Valjevo"];

for(let i = 0; i < cities.length; i++) {
    switch(cities[i]) {
        case "Beograd":
            console.log("Welcome to Belgrade");
            break;
        case "Novi Sad":
            console.log("Welcome to Novi Sad");
            break;
        case "Nis":
            console.log("Welcome to Nis");
            break;
        case "Leskovac":
            console.log("Welcome to Leskovac");
            break;
        case "Valjevo":
            console.log("Welcome to Valjevo");
            break;
    }
}



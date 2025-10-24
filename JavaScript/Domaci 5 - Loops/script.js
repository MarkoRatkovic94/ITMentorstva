
// Ako ime automobila pocinje slovom "a", ne ispisati ga

let cars = [
    "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti",
    "Buick", "BYD", "Cadillac", "Chery", "Chevrolet", "Chrysler", "Citroën",
    "Dodge", "DS Automobiles", "Ferrari", "Fiat", "Ford", "GAZ", "Geely",
    "Genesis", "GMC", "Great Wall", "Hennessey", "Honda", "Hyundai", "Infiniti",
    "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lada", "Lamborghini", "Land Rover",
    "Lancia", "Lexus", "Lincoln", "Lotus", "Lucid", "Lynk & Co", "Maserati",
    "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "MG", "Mini", "Mitsubishi",
    "NIO", "Nissan", "Opel", "Pagani", "Peugeot", "Pininfarina", "Porsche",
    "Renault", "Rimac", "Rolls-Royce", "Saab", "Škoda", "SSC", "Subaru",
    "Suzuki", "Tesla", "Toyota", "UAZ", "Volkswagen", "Volvo", "Zastava"
];

for(let i = 0; i < cars.length; i++) {
    if(cars[i][0].toLowerCase() === "a") {
        continue;
    }
    console.log(cars[i]);

}


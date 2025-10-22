/** 1. Kreiraj promenljivu koja sadrži tvoje godine, a zatim napiši if-else strukturu koja ispisuje "Maloletan"
ako je broj godina manji od 18, inače ispisuje "Punoletan".**/

let years = 30;

if(years < 18)
{
    console.log("Maloletan");
}
else
{
    console.log("Punoletan");
}


/** 2. Kreiraj niz sa nekoliko različitih brojeva, napiši if-else strukturu koja proverava da li je zbir prvog i
poslednjeg broja u nizu veći od 50 i ispiši odgovarajuću poruku.**/

let numbers = [3, 7, 15, 22, 33, 48];

if(numbers[0] + numbers[5] > 50)
{
    console.log("Zbir prvog i poslednjeg broja jeste veci od 50");
}
else
{
    console.log("Zbir prvog i poslednjeg broja nije veci od 50");
}


/**Kreiraj promenljivu koja sadrži ime nekog voća, a zatim napiši if-else strukturu koja ispisuje "Ovo je jabuka"
ako je vrednost "jabuka", "Ovo je banana" ako je vrednost "banana", i "Neko drugo voće" za sve ostale vrednosti.**/

let fruit = "jagoda";

if(fruit == "jabuka")
{
    console.log("Ovo je jabuka");
}
else if(fruit == "banana")
{
    console.log("Ovo je banana");
}
else
{
    console.log("Neko drugo voce");
}
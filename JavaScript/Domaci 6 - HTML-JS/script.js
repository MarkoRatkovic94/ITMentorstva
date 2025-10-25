
alert("Dobrodosao na sajt!");

let names = ["admin", "administrator", "marko"];

/**
 * Da li je ime koje je korisnik uneo u arrayu names?
 *  -> Marko -> Da li se to ime nalazi u array names?
 *    -> Ako se nalazi ispisati preko alerta "Dobrodosao administratore"
 *    -> Ako se ne nalazi onda ispisati "Nemate pristup sajtu"
 */

let name = prompt("Upisite vase ime").toLowerCase();
if(names.includes(name)) {
    alert("Dobrodosao administratore");
} else {
    alert("Nemate pristup sajtu");
}





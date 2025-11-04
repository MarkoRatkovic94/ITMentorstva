/**
 * 1. Napraviti eventListener za klik unutar canvasa
 * 2. Pratiti da li je prvi klik ili drugi klik, na treci klik resetujemo
 * 3. Uzeti poziciju na ekranu na kliku
 * 4. Nacrtati liniju
 */

let clickPoints = [];

let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext("2d");
let draw = document.getElementById("draw");
let reset = document.getElementById("reset");

canvasElement.addEventListener("click", function(e) {

    let rect = canvasElement.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;


    clickPoints.push({x: x, y: y});
    console.log(clickPoints);



        if (clickPoints.length > 0) {

            ctx.beginPath();
            ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

            for (let i in clickPoints) {

                if (i == 0) {
                    continue;

                }
                ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
            }

            draw.addEventListener("click", function(e) {
                ctx.stroke();
                clickPoints = [];
            });


            reset.addEventListener("click", function(e) {
                ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            });


            }


    // Ako je klik points prazan = znamo da je prvi klik
    // Ako klik points imas jedan upis, znamo da je drugi klik
    // Ako klik points ima vec 2 upisa, onda je to treci klik (vreme da ga ispraznimo)

});
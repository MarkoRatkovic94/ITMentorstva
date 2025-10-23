
let dayOfTheWeek = "ponedeljak";

switch(dayOfTheWeek)
{
    case "petak":
        console.log("Weekend is coming!");
        break;
    case "subota":
    case "nedelja":
        console.log("Weekend!");
        break;
    default:
    console.log("Work work...");
    break;
}
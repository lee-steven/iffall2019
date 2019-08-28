let randomColor = Math.round(Math.random() * 6);
let color = '';

switch(randomColor){
    case 0:
        color = "#FF0000";
        break;
    case 1: 
        color = "#FF7F00";
        break;
    case 2: 
        color = "#FFFF00";
        break;
    case 3:
        color = "#00FF00";
        break;
    case 4:
        color = "#0000FF";
        break;
    case 5:
        color = "#4B0082";
        break;
    case 6:
        color = "#8B00FF";
        break;
}

document.getElementById('hello').style.color = color
document.getElementById('world').style.color = color
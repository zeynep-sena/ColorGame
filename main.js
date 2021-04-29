
var score = 0;

function start(difficulty){
    
    var interval;
    var second = 60;
    interval = setInterval(() => {
        if(second >= 0){
            second--;
            document.getElementById("timer").innerHTML = "<h3>Remaining Time: "+second+"</h3>";
        }
        if(second == -1){
            scoreScreen();
        }
    }, 1000);

    switch (difficulty) {
        case 3:
            three();
            break;
        case 4:
            four();
            break;
        case 5:
            five();
            break;
        default:
            break;
    }
    
}

function generateRandomColor(arr) {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    arr.push(color);
    return color;

}
function three(){

    var grids = "";
    var id = [];
    const mode = 3;
    for (let index = 0; index < 9; index++) {
        grids += "<button class='gridsButton' style='background-color:"+generateRandomColor(id)+"' id="+id[index]+" onclick='control(this.id,"+mode+")'></button>";
        if (index == 2 || index == 5) {
            grids += "<br>";
        }
    }
    const targetColor = id[Math.floor(Math.random() * 9)];
    const targetColorDiv = "<div style='background-color: "+targetColor+"; padding: 5px;'><p>Target Color</p></div>";
    
    document.getElementById("difficulty").innerHTML="<div class="+targetColor+"><div>"+targetColorDiv+"</div>" +grids+"</div>";

}

function four(){

    var grids = "";
    var id = [];
    const mode = 4;
    for (let index = 0; index < 16; index++) {
        grids += "<button class='gridsButton' style='background-color:"+generateRandomColor(id)+"' id="+id[index]+" onclick='control(this.id,"+mode+")'></button>";
        if (index == 3 || index == 7 || index == 11) {
            grids += "<br>";
        }
    }
    const targetColor = id[Math.floor(Math.random() * 16)];
    const targetColorDiv = "<div style='background-color: "+targetColor+"; padding: 5px;'><p>Target Color</p></div>";
    document.getElementById("difficulty").innerHTML="<div class="+targetColor+"><div>"+targetColorDiv+"</div>" +grids+"</div>";

}

function five(){

    var grids = "";
    var id = [];
    const mode = 5;
    for (let index = 0; index < 25; index++) {
        grids += "<button class='gridsButton' style='background-color:"+generateRandomColor(id)+"' id="+id[index]+" onclick='control(this.id,"+mode+")'></button>";
        if (index == 4 || index == 9 || index == 14 || index == 19) {
            grids += "<br>";
        }
    }
    const targetColor = id[Math.floor(Math.random() * 16)];
    const targetColorDiv = "<div style='background-color: "+targetColor+"; padding: 5px;'><p>Target Color</p></div>";
    
    document.getElementById("difficulty").innerHTML="<div class="+targetColor+"><div>"+targetColorDiv+"</div>" +grids+"</div>";

}

function control(id, mode){

    var c = document.getElementById(id).parentElement.className;
    if(c == id){
        score++;
        switch (mode) {
            case 3:
                three();
                break;
            case 4:
                four();
                break;
            case 5:
                five();
                break;
            default:
                break;
        }
    }

}

function scoreScreen(){ 

    const scoreDiv = "<p class='score'>score: "+score+"</p>";
    const playAgainDiv = "<button class='playAgain' onclick='window.location.reload();'>Play Again</button>";
    document.getElementById("score").innerHTML = scoreDiv+playAgainDiv;

}
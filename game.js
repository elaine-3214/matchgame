var button1 = document.getElementById("1b")
button1.addEventListener("click", flip());
var button2 = document.getElementById("2b")
button2.addEventListener("click", flip());
var button3 = document.getElementById("3b")
button3.addEventListener("click", flip());
var button4 = document.getElementById("4b")
button4.addEventListener("click", flip());
var button5 = document.getElementById("5b")
button5.addEventListener("click", flip());
var button6 = document.getElementById("6b")
button6.addEventListener("click", flip());
var button7 = document.getElementById("7b")
button7.addEventListener("click", flip());
var button8 = document.getElementById("8b")
button8.addEventListener("click", flip());
var button9 = document.getElementById("9b")
button9.addEventListener("click", flip());
var button10 = document.getElementById("10b")
button10.addEventListener("click", flip());
var button11 = document.getElementById("11b")
button11.addEventListener("click", flip());
var button12 = document.getElementById("12b")
button12.addEventListener("click", flip());
var button13 = document.getElementById("13b")
button13.addEventListener("click", flip());
var button14 = document.getElementById("14b")
button14.addEventListener("click", flip());
var button15 = document.getElementById("15b")
button15.addEventListener("click", flip());
var button16 = document.getElementById("16b")
button16.addEventListener("click", flip());


function flip(){
}

var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function startgame() {
    var numsAvailable = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    for (let i = 0; i < 16; i++) {
        var randIndx = Math.floor(Math.random() * numsAvailable.length);
        cards[i] = numsAvailable[randIndx];
        numsAvailable.splice(randIndx, 1);
    }
    for (let j = 0; j<16; j++){
        var currCard = document.getElementById((j + 1));
        if (cards[j]==1){
            currCard.src = "gamepics/funny1.jpg";
        }
        if (cards[j]==2){
            currCard.src = "gamepics/funny2.jpg";
        }
        if (cards[j]==3){
            currCard.src = "gamepics/funny3.jpg";
        }
        if (cards[j]==4){
            currCard.src = "gamepics/funny4.jpg";
        }
        if (cards[j]==5){
            currCard.src = "gamepics/funny5.jpg";
        }
        if (cards[j]==6){
            currCard.src = "gamepics/funny6.jpg";
        }
        if (cards[j]==7){
            currCard.src = "gamepics/funny7.jpg";
        }
        if (cards[j]==8){
            currCard.src = "gamepics/funny8.jpg";
        }
        
    }
}
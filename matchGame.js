var message = docoument.getElementById("p");

function setName(){
    var userName = form.userName.value;
    message.textContent = "Hi. " + userName + ". You may now press the button to start the game!";

}

function startgame(){
    var card1 = document.getElementById(1);
    var card2 = document.getElementById(2);
    var card3 = document.getElementById(3);
    var card4 = document.getElementById(4);
    var card5 = document.getElementById(5);
    var card6 = document.getElementById(6);
    var card7 = document.getElementById(7);
    var card8 = document.getElementById(8);
    var card9 = document.getElementById(9);
    var card10 = document.getElementById(10);
    var card11 = document.getElementById(11);
    var card12 = document.getElementById(12);
    var card13 = document.getElementById(13);
    var card14 = document.getElementById(14);
    var card15 = document.getElementById(15);
    var card16 = document.getElementById(16);
    var numsAvailable = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    var cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    for (let i = 0; i<17; i++){
        var randIndx = Math.random()*numsAvailable.length;
        cards[i] = numsAvailable[randIndx];
        numsAvailable = numsAvailable.splice(randIndx, 1);
    }
}
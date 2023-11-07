var clicks;
var cards = null;
var upTo2;
var image1 = document.getElementById(1);
var image2 = document.getElementById(2);
var image3 = document.getElementById(3);
var image4 = document.getElementById(4);
var image5 = document.getElementById(5);
var image6 = document.getElementById(6);
var image7 = document.getElementById(7);
var image8 = document.getElementById(8);
var image9 = document.getElementById(9);
var image10 = document.getElementById(10);
var image11 = document.getElementById(11);
var image12 = document.getElementById(12);
var image13 = document.getElementById(13);
var image14 = document.getElementById(14);
var image15 = document.getElementById(15);
var image16 = document.getElementById(16);
const reset = document.querySelector("#reset");
reset.addEventListener("click", startgame);
var listOfImages = [];

function startgame() {
    clicks = 0;
    console.log("ALL CLCIKS ARE ZEROs");
    upTo2 = 0;
    listOfImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];
    for (let i = 0; i<listOfImages.length; i++){
        listOfImages[i].src = "card.png";
    }
    console.log("test pnt1"); //TEST
    var numsAvailable = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    var cardsScramble = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    for (let i = 0; i < 16; i++) {
        var randIndx = Math.floor(Math.random() * numsAvailable.length);
        cardsScramble[i] = numsAvailable[randIndx];
        numsAvailable.splice(randIndx, 1);
    }
    cards = cardsScramble;
    image1.addEventListener("click", () => showCard(1));
    image2.addEventListener("click", () => showCard(2));
    image3.addEventListener("click", () => showCard(3));
    image4.addEventListener("click", () => showCard(4));
    image5.addEventListener("click", () => showCard(5));
    image6.addEventListener("click", () => showCard(6));
    image7.addEventListener("click", () => showCard(7));
    image8.addEventListener("click", () => showCard(8));
    image9.addEventListener("click", () => showCard(9));
    image10.addEventListener("click", () => showCard(10));
    image11.addEventListener("click", () => showCard(11));
    image12.addEventListener("click", () => showCard(12));
    image13.addEventListener("click", () => showCard(13));
    image14.addEventListener("click", () => showCard(14));
    image15.addEventListener("click", () => showCard(15));
    image16.addEventListener("click", () => showCard(16));
}

function checkNumClicks() {
    if (clicks%2 === 0) {
        checkIfSame();
        setTimeout(() => {
            hideAll();
            upTo2 = 0;
        }, 1000); // 1000 milliseconds (1 seconds)
    }
}

function checkIfSame(){
    console.log("test pnt3"); //TEST
    let potentialMatch = [];
    let indexList = [];
    //THIS IS JUST TO SEE WHAT IS CURRENTLY IN LIST OF IMAGES!
    console.log("srcs of everysingle image in list of images!");
    for (let i = 0; i<listOfImages.length; i++){
        console.log(listOfImages[i].src);
    }
    for (let i=0; i<listOfImages.length; i++){//splice listOfImages[i].src into only the last part
        var objCheck = listOfImages[i].src;
        var lastIndex = objCheck.lastIndexOf('/');
        var textAfterLastSlash = objCheck.substring(lastIndex + 1);
        //console.log("This is whatever is after the last slash of the current image: " textAfterLastSlash); //testing to see what that is
        if (textAfterLastSlash !== "card.png") {
            potentialMatch.push(listOfImages[i]);
            indexList.push(i);
        }
    }
    console.log("Potential Match length: "+  potentialMatch.length);
    if((potentialMatch.length===2 && potentialMatch[0].src===potentialMatch[1].src)){
        console.log("first element of potential match: " + potentialMatch[0]);
        console.log("second element of potential match: " + potentialMatch[1]);
        listOfImages.splice(indexList[0], 1);
        listOfImages.splice((indexList[1])-1, 1);
        potentialMatch = [];
    }
    potentialMatch =[];
    upTo2 = 0;
}


function hideAll(){
    console.log("test pnt4"); //TEST
    for (let i = 0; i<listOfImages.length; i++){
        listOfImages[i].src = "card.png";
    }
}

function showCard(imageID){
    upTo2++;
    console.log("this is the " + upTo2 + "click");
    console.log("test pnt2"); //TEST
    console.log(upTo2);
    clicks++;
    var currCard = document.getElementById(imageID);
    if (cards[imageID-1]==1){
        currCard.src = "gamepics/funny1.jpg";
    }
    if (cards[imageID-1]==2){
        currCard.src = "gamepics/funny2.jpg";
    }
    if (cards[imageID-1]==3){
        currCard.src = "gamepics/funny3.jpg";
    }
    if (cards[imageID-1]==4){
        currCard.src = "gamepics/funny4.jpg";
    }
    if (cards[imageID-1]==5){
        currCard.src = "gamepics/funny5.jpg";
    }
    if (cards[imageID-1]==6){
        currCard.src = "gamepics/funny6.jpg";
    }
    if (cards[imageID-1]==7){
        currCard.src = "gamepics/funny7.jpg";
    }
    if (cards[imageID-1]==8){
        currCard.src = "gamepics/funny8.jpg";
    }
    checkNumClicks();
    updateClicks();
}

function updateClicks() {
    var text = document.getElementById("Clicks");
    text.innerHTML = "Number of Clicks: " + clicks;
}

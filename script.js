// Menu
const playButton = document.querySelector(".playButton");
const menuSection = document.querySelector(".menuSection");
const howToPlayButton = document.querySelector(".howToPlayButton");
const howToPlayText = document.querySelector(".howToPlayText");

//UI
const myFooter = document.querySelector(".footerText");

//Game
var loadGame = false;
var resizeGameWindow = true;

playButton.addEventListener("click",()=>{
    DisplayMenu(false);
    loadGame = true;

});


howToPlayButton.addEventListener("click",()=>{
    if(howToPlayText.classList.contains("hiddenItem")){
        howToPlayText.classList.remove("hiddenItem");
    } else {
        howToPlayText.classList.add("hiddenItem");
    }
    moveFooter();
});

function DisplayMenu(show){
    if(show == true){
        menuSection.classList.remove("hiddenItem");
    } else {
        menuSection.classList.add("hiddenItem");
    }
}

function moveFooter(){
    myFooter.classList.add("moveFooter");
}


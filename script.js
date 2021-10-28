//Menu
const playButton = document.querySelector(".playButton");
const menuSection = document.querySelector(".menuSection");
const howToPlayButton = document.querySelector(".howToPlayButton");
const howToPlayText = document.querySelector(".howToPlayText");

//Level Selection 
const levelSelectionSection = document.querySelectorAll(".levelSelectionItems");
const easyLevelsButton = document.querySelector(".easyButton");
const easyLevelSelectionItems = document.querySelectorAll(".easyLevelSelectionItems");


//UI
const myFooter = document.querySelector(".footerText");

//Game
var loadGame = false;
var resizeGameWindow = true;


//Menu
playButton.addEventListener("click",()=>{
    DisplayMenu(false);
    DisplayLevelSelection(true)
    //play Game
    //loadGame = true;
    //moveFooter();
});

howToPlayButton.addEventListener("click",()=>{
    if(howToPlayText.classList.contains("hiddenItem")){
        howToPlayText.classList.remove("hiddenItem");
    } else {
        howToPlayText.classList.add("hiddenItem");
    }
});

function DisplayMenu(show){
    if(show == true){
        menuSection.classList.remove("hiddenItem");
    } else {
        menuSection.classList.add("hiddenItem");
    }
}

function DisplayLevelSelection(show){
    if(show == true){
        for(var i=0; i<levelSelectionSection.length; i++){
            levelSelectionSection[i].classList.remove("hiddenItem");
        }
    } else {
        for(var i=0; i<levelSelectionSection.length; i++){
            levelSelectionSection[i].classList.add("hiddenItem");
        }
    }
}

//UI
function moveFooter(){
    myFooter.classList.add("moveFooter");
}

//Level Selection Section
easyLevelsButton.addEventListener("click",()=>{
    DisplayLevelSelection(false);
    DisplayEasyLevelItems(true);
});

function DisplayEasyLevelItems(show){
    if(show == true){
        for(var i=0; i<easyLevelSelectionItems.length; i++){
            easyLevelSelectionItems[i].classList.remove("hiddenItem");
        }
    } else {
        for(var i=0; i<easyLevelSelectionItems.length; i++){
            easyLevelSelectionItems[i].classList.add("hiddenItem");
        }
    }
}
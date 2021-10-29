//Menu
const playButton = document.querySelector(".playButton");
const menuSection = document.querySelector(".menuSection");
const howToPlayButton = document.querySelector(".howToPlayButton");
const howToPlayText = document.querySelector(".howToPlayText");
const menueBackButton = document.querySelector(".backButtonLevelSelection");

//Level Selection 
const levelSelectionSection = document.querySelectorAll(".levelSelectionItems");
const easyLevelsButton = document.querySelector(".easyButton");
const easyLevelSelectionItems = document.querySelectorAll(".easyLevelSelectionItems");
const easylevelsBackButton = document.querySelector(".backButtonEasyLevelsSelection");

//UI
const myFooter = document.querySelector(".footerText");


//Game
var loadGame = false;
var resizeGameWindow = true;


//Menu
playButton.addEventListener("click",()=>{
    DisplayMenu(false);
    DisplayLevelSelection(true)
});

howToPlayButton.addEventListener("click",()=>{
    if(howToPlayText.classList.contains("hiddenItem")){
        howToPlayText.classList.remove("hiddenItem");
    } else {
        howToPlayText.classList.add("hiddenItem");
    }
});

menueBackButton .addEventListener("click",()=>{
    DisplayLevelSelection(false);
    DisplayMenu(true);
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
    DisplayEasyLevelItems(true);
    DisplayLevelSelection(false);
});

easylevelsBackButton.addEventListener("click",()=>{
    DisplayLevelSelection(true);
    DisplayEasyLevelItems(false);
});

easyLevelSelectionItems.forEach(item => {
    item.addEventListener("click", ()=>{
        SetUpGame(item.innerHTML);
        DisplayEasyLevelItems(false);
        console.log(item.innerHTML);
    })
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


//Game
function SetUpGame(level){
    if(level != "Back"){
        gameLevelData = parseInt(level);
        boardLoaded = true;
        loadGame = true;
        moveFooter();
    }
}
//Menu
const playButton = document.querySelector(".playButton");
const menuSection = document.querySelector(".menuSection");
const howToPlayButton = document.querySelector(".howToPlayButton");
const howToPlayText = document.querySelector(".howToPlayText");
const menuBackButton = document.querySelector(".backButtonLevelSelection");

//Level Selection 
const levelSelectionSection = document.querySelectorAll(".levelSelectionItems");
//Easy
const easyLevelsButton = document.querySelector(".easyButton");
const easyLevelSelectionItems = document.querySelectorAll(".easyLevelSelectionItems");
const easylevelsBackButton = document.querySelector(".backButtonEasyLevelsSelection");
//Medium
const mediumlevelsButton = document.querySelector(".meduimButton");
const mediumLevelSelectionItems = document.querySelectorAll(".mediumLevelSelectionItems");
const mediumLevelsBackButton = document.querySelector(".backButtonMediumLevelsSelection");
//Hard
const hardLevelsButton = document.querySelector(".hardButton");
const hardLevelSelectionItems = document.querySelectorAll(".hardLevelSelectionItems");
const hardLevelsBackButton = document.querySelector(".backButtonHardLevelsSelection");
//UI
const myFooter = document.querySelector(".footerText");

//Game
var loadGame = false;
var resizeGameWindow = true;
const gameBackButton = document.querySelector(".gameBackButton");

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

menuBackButton.addEventListener("click",()=>{
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
//Easy
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

//Medium
mediumlevelsButton.addEventListener("click", () =>{
    DisplayMediumLevelItems(true);
    DisplayLevelSelection(false);
});

mediumLevelSelectionItems.forEach(item => {
    item.addEventListener("click", ()=>{
        SetUpGame(item.innerHTML);
        DisplayMediumLevelItems(false);
    })
});

mediumLevelsBackButton.addEventListener("click", ()=>{
    DisplayLevelSelection(true);
    DisplayMediumLevelItems(false);
});

function DisplayMediumLevelItems(show){
    if(show == true){
        mediumLevelSelectionItems.forEach(item => {
            item.classList.remove("hiddenItem");
        });
    } else {
        mediumLevelSelectionItems.forEach(item => {
            item.classList.add("hiddenItem");
        });
    }
}

//Hard
hardLevelsButton.addEventListener("click", () =>{
    DisplayHardLevelItems(true);
    DisplayLevelSelection(false);
});

hardLevelSelectionItems.forEach(item => {
    item.addEventListener("click", ()=>{
        SetUpGame(item.innerHTML);
        DisplayHardLevelItems(false);
    })
});

hardLevelsBackButton.addEventListener("click", ()=>{
    DisplayLevelSelection(true);
    DisplayHardLevelItems(false);
});

function DisplayHardLevelItems(show){
    if(show == true){
        hardLevelSelectionItems.forEach(item => {
            item.classList.remove("hiddenItem");
        });
    } else {
        hardLevelSelectionItems.forEach(item => {
            item.classList.add("hiddenItem");
        });
    }
}

//Game
function SetUpGame(level){
    if(level != "Back"){
        won = false;
        gameLevelData = parseInt(level);
        boardLoaded = true;
        loadGame = true;
        gameBackButton.classList.remove("hiddenItem");
        // moveFooter();
    }
}

gameBackButton.addEventListener("click",()=>{
loadGame = false;
boardLoaded = false;
DisplayLevelSelection(true);
gameBackButton.classList.add("hiddenItem");
});
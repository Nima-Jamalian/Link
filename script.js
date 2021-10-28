// Menu
const playButton = document.querySelector(".playButton");
const menuSection = document.querySelector(".menuSection");
const howToPlayButton = document.querySelector(".howToPlayButton");
const howToPlayText = document.querySelector(".howToPlayText");


playButton.addEventListener("click",()=>{
    DisplayMenu(false);
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
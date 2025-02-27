let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");


let errorMsg = "Please enter a word";

function createAndAddWordToWordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordEl = document.createElement("span");

    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordEl.classList.add("m-3");

    wordsContainerEl.appendChild(wordEl);

}


for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {
    let userEnterWord = userInputEl.value;
    if (userEnterWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEnterWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}
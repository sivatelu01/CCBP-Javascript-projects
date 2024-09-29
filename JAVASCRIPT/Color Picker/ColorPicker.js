let colorPickerContainerElement = document.getElementById("colorPickercontainer");
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");


function changeBgToGreyAndUpdateText() {
    document.getElementById("button1");
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeElement.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    document.getElementById("button2");
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeElement.textContent = "#6fcf97";


}

function changeBgToBlueAndUpdateText() {
    document.getElementById("button3");
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeElement.textContent = "#56ccf2";

}

function changeBgToPurpleAndUpdateText() {
    document.getElementById("button4");
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeElement.textContent = "#bb6bd9";
}
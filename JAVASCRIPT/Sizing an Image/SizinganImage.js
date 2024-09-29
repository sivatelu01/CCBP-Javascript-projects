let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let imageMaxWidth = 300;
let imageMinWidth = 100;
let defaultImageWidth = 200;
let maxWidthWarningMessage = "Too big.Decrease the size of the Image";
let minWidthWarningMessage = "Can't Visible.Increase the size of the Image";



imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function onIncrement() {
    if (defaultImageWidth >= imageMaxWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;

    } else {
        defaultImageWidth = defaultImageWidth + 5;
        let updatedImageWidth = defaultImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function onDecrement() {
    if (defaultImageWidth <= imageMinWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;

    } else {
        defaultImageWidth = defaultImageWidth - 5;
        let updatedImageWidth = defaultImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}
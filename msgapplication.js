let saveButton = document.getElementById("saveButton");
let textareaElement = document.getElementById("message");
saveButton.onclick = function() {
    let userEnteredText = textareaElement.value;
    localStorage.setItem("userEnteredText", userEnteredText);
};
let storedMsg = localStorage.getItem("userEnteredText");
if (storedMsg === null) {
    textareaElement.value = "";
} else {
    textareaElement.value = storedMsg;
}
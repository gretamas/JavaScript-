const container = document.querySelector(".container");
const existingText = document.querySelector(".existing-text");
const textarea = document.createElement("textarea");

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        event.preventDefault(); 
        container.appendChild(textarea);
        textarea.focus();
        existingText.style.display = "none";
    }

    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault(); 
        let editedText = textarea.value;
        existingText.textContent = editedText;
        existingText.style.display = "block";
        textarea.style.display = "none";
    }
});









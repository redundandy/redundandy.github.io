function typingEffect() {
    const words = ["./gray.sh", "echo andy"]
    let wordCount = 0;
    let letterCount = 0;
    let currentText = "";
    let currentWord = "";

    let timeOut = 400;
    let isDeleting = false;

    function type() {
        if(wordCount === words.length) {
            wordCount = 0;
        }
        currentWord = words[wordCount];
        if(isDeleting) {
            currentText = currentWord.slice(0, --letterCount)
        }
        else {
            currentText = currentWord.slice(0, ++letterCount)
        }
        document.querySelector(".dynamictitle").textContent = currentText

        timeOut = isDeleting ? 10 : 100;
        if(!isDeleting && currentText.length === currentWord.length){
            timeOut = 1500 //waits 1.5 seconds after the whole thing is typed out
            isDeleting = true;
        } 
        else if(isDeleting && currentText.length === 0) {
            timeOut = 500; //waits .5 seconds before typing again once everything is deleted
            isDeleting = false;
            wordCount++;
        }
        setTimeout(type, timeOut); //Recursive Call
    }
    type();
}
typingEffect();
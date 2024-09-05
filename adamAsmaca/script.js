const word_el = document.getElementById("word");
const popup = document.getElementById("popup-container");
const message_el = document.getElementById("success-message");
const wrongLetters_el = document.getElementById("wrong-letters");
const items = document.querySelectorAll(".item");
const message = document.getElementById("message");
const playAgainBtn = document.getElementById("play-again");


const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["javascript", "java", "python", "php", "html", "css", "react", "angular", "vue", "nodejs", "express", "mongodb", "sql", "mysql", "postgresql", "sqlite", "c", "c++", "c#", "swift", "kotlin", "ruby", "perl", "rust", "scala", "groovy", "typescript", "assembly", "bash", "powershell", "r", "dart", "go", "haskell", "julia", "lua", "matlab", "objective-c", "php", "shell", "smalltalk", "vba"];

    return words[Math.floor(Math.random() * words.length)];

}




function displayWord() {
    word_el.innerHTML = `${selectedWord.split("").map(letter =>
        `<div class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
        </div>`).join("")}`;

    const w = word_el.innerText.replace(/\n/g, "");
    if (w === selectedWord) {
        popup.style.display = "flex";
        message_el.innerText = "Tebrikler! Kazandınız!";
    }
}



function updateWrongLetters() {
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length>0?'<h3>Hatalı harfler</h3>':''}
        ${wrongLetters.map(letter=> `<span>${letter}<span>`)}
    `;

    items.forEach((item,index) => {
        const errorCount = wrongLetters.length;

        if (index<errorCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

    if(wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        document.getElementById("success-message").innerText = 'Maalesef Kaybettiniz.';
    }
}

function displayMessage() {
    message.classList.add("show");
    setTimeout(() => {
        message.classList.remove("show");
    }, 2000);
}

playAgainBtn.addEventListener("click", function () {
    correctLetters.splice(0); //kelimeleri sıfırla
    wrongLetters.splice(0); //yanlış harfleri sıfırla
    selectedWord = getRandomWord();//yeni kelime seç
    displayWord();//kelimeyi göster
    updateWrongLetters();//yanlış harfleri göster
    popup.style.display = "none";//popupu kapat
});


window.addEventListener("keydown", e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }
            else {
                displayMessage();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            } else {
                displayMessage();
            }
        }


    }
});

displayWord();
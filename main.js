let tryCount = 1
let gameWord = ""

function startUp() {
    getWord()
    setFocus()
    setFocus(1)
    setTry(tryCount)
}
function setFocus() {

    let inputs = document.querySelectorAll(".wordInput")
    inputs.forEach(input => {
        input.addEventListener("keydown", focusHandler)

        // next.focus()
    })

}
async function getWord() {
    fetch("https://random-word-api.herokuapp.com/word?length=5").then(word => word.json()).then(word => gameWord = word[0])

    //return word[0]
}
function checkTry() {
    console.log(gameWord);
    let row = Array.from(document.querySelector(`.column${tryCount}`).children)
    let word = ""
    let gameWordSplit = gameWord.split("")

    row.map((input, index) => {

        word += input.value

        if (!input.value) return
        if (gameWordSplit[index] == input.value) {
            input.style.backgroundColor = "green"
            document.getElementById(`${input.value.toUpperCase()}`).style.backgroundColor = "green"
            return
        }
        if (gameWordSplit.includes(input.value)) {
            input.style.backgroundColor = "yellow"
            document.getElementById(`${input.value.toUpperCase()}`).style.backgroundColor = "yellow"
            return
        }
        input.style.backgroundColor = "grey"
        document.getElementById(input.value.toUpperCase()).style.backgroundColor = "grey"

    })
    if (word == gameWord) {
        gameOver()
        return
    }
    tryCount++
    setTry(tryCount)

}
function focusHandler(e) {
    if (e.keyCode == 13) {
        document.getElementById("button").click()
    }
    if (e.keyCode == 8) {
        e.target.value = ""
        e.target.previousElementSibling.focus()
        e.preventDefault()
        return
    }

    if (e.target.maxLength == e.target.value.length) {
        e.target.nextElementSibling.focus()
    }
}
function setTry(tryCount) {
    if (tryCount == 7) {
        console.log("was yout last try");
        return
    }
    let currentRow = document.querySelector(`.column${tryCount}`)
    //enable try row
    Array.from(currentRow.children).map(child => {
        child.disabled = false
    })
    currentRow.children[0].focus()

    if (tryCount != 1) {

        let rowBefore = document.querySelector(`.column${tryCount - 1}`)
        //disable last finished try
        Array.from(rowBefore.children).map(child => {
            child.disabled = true
        })
    }

}
function gameOver() {
    let gameOver = document.getElementById("gameOver")
    gameOver.style.display = "block"
    setTimeout(()=>gameOver.style.display = "none",2000)
}
function resetGame(){
    tryCount=1
    Array.from(document.querySelectorAll(".wordInput")).map(input=>{
        input.disabled=true
        input.value=""
        input.style.backgroundColor=""
    })

    setTry(tryCount)
    getWord()
    let teste=Array.from(document.querySelector(".keyboard").children)
    teste.map(row=>{
        Array.from(row.children).map(key=>{
            key.style.backgroundColor=""
        })
    })
   
}

startUp()



import { focusHandler, setTry } from "./handlers.js"

let tryCount = 1
let gameWord = await getWord()

function startUp() {
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
    let word = await fetch("https://random-word-api.herokuapp.com/word?length=5").then(word => word.json())

    return word[0]
}
function checkTry() {
    console.log(gameWord);
    let row = Array.from(document.querySelector(`.column${tryCount}`).children)
    let word = ""
    let gameWordSplit = gameWord.split("")

    row.map((input, index) => {

        word += input.value


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
        console.log("game over");
        return
    }
    tryCount++
    setTry(tryCount)

    console.log(word.split(""));
}




startUp()
document.getElementById("button").addEventListener("click", checkTry, false)

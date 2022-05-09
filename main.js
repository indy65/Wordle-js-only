
import {focusHandler,setTry} from "./handlers.js"

let tryCount = 1
let gameWord =await getWord()

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
function checkTry(){
    let row =Array.from(document.querySelector(`.column${tryCount}`).children )
    let word=""
 
    row.map(input=>{
       
        word+=input.value
   })
   tryCount++
   setTry(tryCount)
   console.log(gameWord)
}




startUp()
document.getElementById("button").addEventListener("click",checkTry,false)
        
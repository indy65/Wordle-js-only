export function focusHandler(e) {
 if(e.keyCode==13){
     document.getElementById("button").click()
 }
    if (e.keyCode == 8) {
        e.target.value = ""
        e.target.previousElementSibling.focus()
        e.preventDefault()
        return
    }

   if(e.target.maxLength==e.target.value.length){
        e.target.nextElementSibling.focus()
    }
}

export function setTry(tryCount) {
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
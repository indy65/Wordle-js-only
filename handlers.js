export function focusHandler(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        e.target.value = e.key
        e.target.nextElementSibling.focus()
        e.preventDefault()

    }
    if (e.keyCode == 8) {
        e.target.value = ""
        e.target.previousElementSibling.focus()
        e.preventDefault()


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

    if (tryCount != 1) {

        let rowBefore = document.querySelector(`.column${tryCount - 1}`)
        //disable last finished try
        Array.from(rowBefore.children).map(child => {
            child.disabled = true
        })
    }

}
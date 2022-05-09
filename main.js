
let tryCount = 1

function setFocus() {

    let inputs = document.querySelectorAll(".wordInput")

    inputs.forEach(input => {
        if (!input.classList.contains("letter5")) {

            input.addEventListener("keyup", () => {
                input.nextElementSibling.focus()
            })
        }
        // next.focus()
    })

}
function setTry(tryCount) {
    let nextRow = document.querySelector(`.coluna${tryCount}`)

    //enable next try
    Array.from(nextRow.children).map(child => {
        child.disabled = false
    })

    if (tryCount != 1) {

        let currentRow = document.querySelector(`.coluna${tryCount - 1}`)
        //disable current finished try
        Array.from(currentRow.children).map(child => {
            child.disabled = true
        })
    }

}

setFocus()
setTry(1)
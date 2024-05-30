let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector("#reset-btn")
let new_game = document.querySelector("#new-btn")
let winner_text = document.querySelector("#winner-text")
let winner_container = document.querySelector(".msg-container")
let main = document.querySelector("main")

main.classList.remove("hidden")

let turn0 = true

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


var count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "O"
            turn0 = false
            count++
        }
        else {
            box.innerText = "X"
            turn0 = true
            count++
        }
        box.disabled = true
        winner()
        draw(count)
        if(count == 9){
            count  = 0;
        }
    })
});

const disableButton = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableButton = () => {
    turn0 = true
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = ""
    });
    winner_container.classList.add("hide")
    main.classList.remove("hidden")
    count = 0;
}

const displayWinner = (winner) => {
    if (winner == "O") {
        winner_text.innerText = `Congratulations Winner is Player 1`
    }
    else {
        winner_text.innerText = `Congratulations Winner is Player 2`
    }
    winner_container.classList.remove("hide")
    main.classList.add("hidden")
    disableButton()

}

const draw = (count) =>{
    if(count == 9){
        winner_text.innerText = `The Game is Draw`
        disableButton()
        winner_container.classList.remove("hide")
        main.classList.add("hidden")
    }   
}

const winner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                displayWinner(pos1Val)
            }
        }
    }
}

reset_btn.addEventListener("click", enableButton)
new_game.addEventListener("click", enableButton)
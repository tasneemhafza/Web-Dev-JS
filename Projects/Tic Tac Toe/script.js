let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let win = document.querySelector(".winner");
let winMsg = document.querySelector("#winMsg");

let turnO = true;
let count = 0;

let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const displayWinner = (pos) => {
    winMsg.innerHTML = `Winner is ${pos}`;
    win.classList.remove("hide");
    disableBox();
};

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBox();
    win.classList.add("hide");
};

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const drawGame = () => {
    winMsg.innerText = `Game was a Draw.`;
    win.classList.remove("hide");
    disableBox();
};

reset.addEventListener("click", resetGame);

const checkWinner = () => {
    for (let patterns of winningPatterns) {
        // console.log(patterns[0], patterns[1], patterns[2]);
        // console.log(
        //     boxes[patterns[0]].innerHTML,
        //     boxes[patterns[1]].innerHTML, 
        //     boxes[patterns[2]].innerHTML
        // );
        let pos1_val = boxes[patterns[0]].innerHTML;
        let pos2_val = boxes[patterns[1]].innerHTML;
        let pos3_val = boxes[patterns[2]].innerHTML;
        if (pos1_val != "" && pos2_val != "" && pos3_val != "") {
            if (pos1_val === pos2_val && pos2_val === pos3_val) {
                displayWinner(pos1_val);
                return true;
            }
        }
    }
    return false;
};

newGame.addEventListener("click", resetGame);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            if (turnO) {
                box.style.color = "#521d3c";
                box.innerHTML = "O";
                turnO = false;
            } else {
                box.style.color = "#B08EA2";
                box.innerHTML = "X";
                turnO = true;
            }
            box.disabled = true;
            count++;
            let isWinner = checkWinner();
            if (count == 9 && !isWinner) {
                drawGame();
            }
        }
    })
})
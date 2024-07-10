let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const update_user_score = document.querySelector("#user_score");
const update_comp_score = document.querySelector("#comp_score");

//random computer choice
const generate_random_choice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const draw = () => {
    console.log("Draw");
    msg.innerText = "Game Draw";
}

const show_winner = (user_win, user_choice, comp_choice) => {
    if (user_win) {
        console.log("You Win");
        userScore++;
        msg.innerText = `You win! Your ${user_choice} beats ${comp_choice}`;
        update_user_score.innerText = userScore;
    } else {
        console.log("Computer Win");
        compScore++;
        msg.innerText = `Computer win! ${comp_choice} beats your ${user_choice}`;
        update_comp_score.innerText = compScore;
    }
}

const play = (user_choice) => {
    // console.log("user choice= ", user_choice);
    const comp_choice = generate_random_choice();
    // console.log("computer choice= ", comp_choice);

    if (user_choice === comp_choice) {
        draw();
    } else {
        let user_win = true;
        if (user_choice === "Rock") {
            user_win = comp_choice === "Paper" ? false : true;
        } else if (user_choice === "Paper") {
            user_win = comp_choice === "Scissors" ? false : true;
        } else {
            user_win = comp_choice === "Rock" ? false : true;
        }
        show_winner(user_win, user_choice, comp_choice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        play(user_choice);
    })
})
let player1Score = 0
let player2score = 0
let player1Turn = true
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetBtn() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1
   if (player1Turn) {
       player1Score += randomNumber
       player1Scoreboard.textContent = player1Score
       player1Dice.textContent = randomNumber
       player1Dice.classList.remove("active")
       player2Dice.classList.add("active")
       message.textContent = "Player 2 Turn"
       
   }else {
       player2score += randomNumber
       player2Scoreboard.textContent = player2score
       player2Dice.textContent = randomNumber
       player2Dice.classList.remove("active")
       player1Dice.classList.add("active")
       message.textContent = "Player 1 Turn"
   }

   if (player1Score >= 20) {
       message.textContent = "Player 1 has won!"
       showResetBtn()
   } else if (player2score >= 20) {
    message.textContent = "Player 2 has won!"
    showResetBtn()
   }

   player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function() {
    reset()

})

function reset() {
    player1Score = 0
    player2score = 0
    player1Turn = true
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

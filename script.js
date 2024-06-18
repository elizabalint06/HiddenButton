let buttons = document.querySelectorAll(".btn-custom");
let winnerIndex = Math.floor(Math.random() * buttons.length);

function checkWinner(index, winnerIndex) {
    if (index === winnerIndex) {
        document.getElementById('result').innerHTML = '<p class="text-success">Congratulations! You won 🏆</p>';
    } else {
        document.getElementById('result').innerHTML = '<p class="text-danger">You did not win! Keep trying 😞</p>';
    }
}

buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        checkWinner(index, winnerIndex);
    });
});

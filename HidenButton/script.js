let buttons = document.querySelectorAll('.btn-custom');
let winnerIndex = Math.floor(Math.random() * buttons.length); 

buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        if (index === winnerIndex) {
            document.getElementById('result').innerHTML = '<p class="text-success">Congratulations! You won 🎉</p>';
        } else {
            document.getElementById('result').innerHTML = '<p class="text-danger">You did not win! Keep trying 😔</p>';
        }
    });
});

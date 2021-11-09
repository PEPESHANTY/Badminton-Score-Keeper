const p1 = {
    score: 0,
    button: document.querySelector('#P1button'),
    display: document.querySelector('#P1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#P2button'),
    display: document.querySelector('#P2display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore=5;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score +=1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
function winBy2(player,opponent){
    if (player.score === opponent.score && player.score === winningScore - 1) { // checks for contidion
       winningScore++;
       playto.selectedOptions[0].value = winningScore; //changes selected option value and text reflecting the new final score
       playto.classList.add('overtime'); // overtime styling
       playto.selectedOptions[0].innerText = `Tie BREAK to ${winningScore}`; 
 
    }
 }



p1.button.addEventListener('click', function () {
    updateScores(p1,p2);
    winBy2(p1,p2);
    
});
p2.button.addEventListener('click', function () {
   updateScores(p2,p1);
   winBy2(p2,p1);
});

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset()
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }


     
    //not effective for large data
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-success','has-text-danger');
    // p2.display.classList.remove('has-text-success','has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;

}


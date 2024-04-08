
    let scores = {
    ties: 0,
    wins: 0,
    losses: 0
    };


    scores = JSON.parse(localStorage.getItem('resultCountSave'));
    updateScoreElement();
    let IntervalID;
    let autoPlayButton = document.querySelector('.autoplayButton');

    function autoplay() {
   if (autoPlayButton.innerHTML === 'Auto play' ) {
     autoPlayButton.innerHTML = 'Stop Autoplay'
     IntervalID =  setInterval( function () {
      const playerMove = pcMoves();
      makeMove(playerMove);
      },1000) 
   }
   else {
    autoPlayButton.innerHTML = 'Auto play'
    clearInterval(IntervalID);
   }
   }


    function picks (icon) {
    document.querySelector('.You')
    .innerHTML = 'You: ';
    document.querySelector('.picks-User')
    .innerHTML = `${icon}`;
    }



    function resetScore() {

    results = '';
    scores.wins = 0;
    scores.ties = 0;
    scores.losses = 0;

    document.querySelector('.results-Div')
    .innerHTML = results;
    document.querySelector('.scores-Div')
    .innerHTML = `Wins: ${scores.wins}, Ties: ${scores.ties}
    Loses: ${scores.losses}`; 
    localStorage.setItem('resultCountSave', JSON.stringify(scores));
    }

    function makeMove(playerMove) {
        const computerMove = pcMoves();
        let resultElement = document.querySelector('.results-Div');
            let results = '';    
    
        if (playerMove === computerMove) {
        results = resultElement.innerHTML = ` <p style = "color: yellow">Tie.</p>`;
        scores.ties++;
    
        } else if (
        (playerMove === 'Rock' && computerMove === 'Scissor') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissor' && computerMove === 'Paper')
        ) {
        results = resultElement.innerHTML = `<p style = "color: rgb(6, 255, 6)">You win.</p>`;

        scores.wins++;

        } else {
        results = resultElement.innerHTML = `<p style = "color: red">You lose.</p>`;
        scores.losses++;
        }
        const movesElement = document.querySelector('.picks-User');
        movesElement.innerHTML = `
        You
        <img src="icons/${playerMove}-emoji.png" class="move-icon">
        <img src="icons/${computerMove}-emoji.png" class="move-icon">
        Computer
        `; 
        updateScoreElement();
        }
        function updateScoreElement() {
            document.querySelector('.scores-Div')
            .innerHTML = `Wins : ${scores.wins} Ties : ${scores.ties}
            Loses : ${scores.losses}`; 
            localStorage.setItem('resultCountSave', JSON.stringify(scores));
            }
      

    function pcMoves() {
    const  playerMove = Math.random();
    let computerMove;
    if (playerMove < 0.3199999999999999) {
    computerMove = 'Rock'  
    }
    else if (playerMove > 0.3199999999999999 && playerMove < 0.6999999999999999) {
    computerMove = 'Paper'  
    }
    else if (playerMove > 0.6999999999999999 && playerMove <= 0.9999999999999999) {
    computerMove = 'Scissor'
    }
    return computerMove;
    }

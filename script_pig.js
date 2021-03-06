'use strict';

var scores,activePlayer,randomScore,playingGame;


init();


//document.querySelector('#current--' + activePlayer ).textContent = dice;
//document.querySelector('#current--1').innerHTML = '<em>' + dice +'</em>';



document.querySelector('.btn--roll').addEventListener('click', function() {
    if(playingGame){
        //    1.Random number
        var dice = Math.floor(Math.random() * 6 ) + 1;
    //    2.display
        var diceDom = document.querySelector('.dice');
       diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
    //    3.update the score IF the rolled number was NOT a 1


        if(dice !== 1){
            randomScore += dice;
            document.querySelector('#current--' + activePlayer ).textContent = randomScore;
    //        button hold
        }
        else{
            nextPlayer();
        }
    }
    
    
});


document.querySelector('.btn--hold').addEventListener('click', function() {
    
    if(playingGame){
            //    Add current score to Global score
        scores[activePlayer] += randomScore;

    //    update the UI
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

    //    check player won the game
        if(scores[activePlayer] >= 100){
            playingGame = false;
            document.getElementById('name--' + activePlayer).textContent = "WINNER";
            document.querySelector('.dice').style.display = "none";
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('active');
        }
        else{
    //    Next Player
            nextPlayer();
        }
    }
    

    

    
});


document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0,0];
    randomScore = 0;
    activePlayer = 0;
    playingGame = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    
    document.getElementById('name--0').textContent = "Player 1";
    document.getElementById('name--1').textContent = "Player 2";
    
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    
    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.remove('active');
    document.querySelector('.player--0').classList.add('active');
    
}


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    randomScore = 0;
//        activePlayer
//        document.querySelector('#current--' + activePlayer ).textContent = randomScore;
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';


    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
//        document.querySelector('.player--0').classList.remove('player--active');
//        document.querySelector('.player--1').classList.add('player--active');

    document.querySelector('.dice').style.display = 'none';
}



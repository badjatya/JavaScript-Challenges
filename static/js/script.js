function ageDays () {
    var birthYear = prompt("Whats Your Birth Year?");
    var days = (2021 - birthYear) * 365;

    let h1 = document.createElement('h1'); //element created
    h1.setAttribute('id',"ageInDays"); //adding a attribute id in h1 element

    let result = document.createTextNode("You are " + days + " old"); //creating a node in html
    h1.appendChild(result); //appending the text in h1 
    document.getElementById('challenge1').appendChild(h1); //appending h1 in id challenge1 

}

function resetAgeDays() {
    document.getElementById('ageInDays').remove(); //removing the element having id ageInDays
}


// CHALLENGE 2 

function catGen () {
    var img = document.createElement('img');
    img.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    document.getElementById('cat').appendChild(img);
}

// CHALLEMGE 3

function rpc(yourChoice) {
    var humanChoice = yourChoice.id;
    var botChoice = botChoiceGenrator ();

    var result = winner(winnerChecker(humanChoice , botChoice));
    rpcFrontEnd(result,humanChoice,botChoice);
}

function botChoiceGenrator () {
    var bot = Math.floor(Math.random() * 3);
    return ["rock", "paper" , "scissor"] [bot];
} 

function winnerChecker(humanChoice , botChoice) {
    var rpcDatabase = {
        rock: {rock:0.5, paper:0, scissor:1},
        paper: {rock:1, paper:0, scissor:0.5},
        scissor: {rock:0, paper:1, scissor:0.5},
    }

    var humanScore = rpcDatabase[humanChoice] [botChoice];
    var botScore = rpcDatabase[botChoice] [humanChoice];
    return [humanScore , botScore];
}

function winner ([humanChoice , botChoice]) {
    var message = {};
    if (humanChoice == 0) {
        message = {winMessage: "You Lost", color: "rgba(255, 0, 0, 0.8)"};
        return message;
    } else if (botChoice == 0) {
        message = {winMessage: "You Won", color: "green"};
        return message;
    } else {
        message = {winMessage: "Game Tied", color: "yellow"};
        return message;
    }
}

function rpcFrontEnd (message,humanChoice,botChoice) {
    var humanImg = document.createElement('img');
    var winH2 = document.createElement('h2');
    var botImg = document.createElement('img');
    var h2Text = document.createTextNode(message.winMessage);
 

    var imageDataBase = {
        rock: document.getElementById('rock').src,
        paper: document.getElementById('paper').src,
        scissor: document.getElementById('scissor').src,
    }


    humanImg.src = imageDataBase[humanChoice];
    winH2.appendChild(h2Text);
    botImg.src = imageDataBase[botChoice];
 
    if (message.winMessage == "You Lost"){
        humanImg.setAttribute('id' , 'lostHumanImg');
        botImg.setAttribute('id' , 'winBotImg');
        winH2.setAttribute('id' , 'lostH2');

    } else if (message.winMessage == "You Won") {
        humanImg.setAttribute('id' , 'winHumanImg');
        botImg.setAttribute('id' , 'lostBotImg');
        winH2.setAttribute('id' , 'winH2');
    } else {
        humanImg.setAttribute('id' , 'tiedHumanImg');
        botImg.setAttribute('id' , 'tiedBotImg');
        winH2.setAttribute('id' , 'tiedH2');
    }

    document.getElementById('Challenge3').appendChild(humanImg);
    document.getElementById('Challenge3').appendChild(winH2);
    document.getElementById('Challenge3').appendChild(botImg);
 
    
    document.getElementById('challenge3Remove').style.display = "none";
}

// CHALLENGE 4 
var allButton = document.getElementsByTagName("button");
var copyAllButton = [];

for (let i = 0; i < allButton.length; i++) {
    copyAllButton[i] = allButton[i].classList[1];
}

function challenge4ButtonColorChanger(thingy) {
    if (thingy.value === "red") {
        redButton();
    } else if (thingy.value === "green" ) {
        greenButton();
    } else if (thingy.value === "reset" ) {
        resetButton();
    } else if (thingy.value === "random" ) {
        randomButton();
    }  else if (thingy.value === "yellow" ) {
        yellowButton();
    }  else if (thingy.value === "blue" ) {
        blueButton();
    }
}

function redButton () {
    for (let i = 0 ; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add("btn-danger");
    }
}

function greenButton () {
    for (let i = 0 ; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add("btn-success");
    }
}

function yellowButton () {
    for (let i = 0 ; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add("btn-warning");
    }
}

function blueButton () {
    for (let i = 0 ; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add("btn-primary");
    }
}

function resetButton () {
    for (let i = 0 ; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copyAllButton[i]);
    }
}

function randomButton () {
    for (let i = 0 ; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
    }
    let randomText = ["btn-primary" , "btn-success" , "btn-danger" , "btn-warning"];

    for (let i = 0 ; i < allButton.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);

        allButton[i].classList.add(randomText[randomNumber]);

    }
}


// CHALLENGE 5 

let blackjackGame = {
    'you': {
        'scoreSpan': '#your-blackjack-result',
        'div': '#your-box',
        'score': 0,
    },
    'dealer': {
        'scoreSpan': '#dealer-blackjack-result',
        'div': '#dealer-box',
        'score': 0,
    },
    'cards': ['2','3','4','5','6','7','8','9','J','Q','K','A'],
    'cardsMap': {
        '2' : 2,
        '3' : 3,
        '4' : 4,
        '5' : 5,
        '6' : 6,
        '7' : 7,
        '8' : 8,
        '9' : 9,
        '10' : 10,
        'J' : 10,
        'Q' : 10,
        'K' : 10,
        'A' : [1,11],
    },
    'wins': 0,
    'loss': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('./static/sounds/swish.m4a');
const winSound = new Audio('./static/sounds/cash.mp3');
const lossSound = new Audio('./static/sounds/aww.mp3');

document.querySelector("#blackjack-hit-button").addEventListener('click',hitButtonBlackjack);
document.querySelector("#blackjack-stand-button").addEventListener('click',dealersLogic);
document.querySelector("#blackjack-deal-button").addEventListener('click',dealButtonBlackjack);

function hitButtonBlackjack () {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(YOU , card);
        updateScore(card , YOU);
        showScore(YOU);
    }
}

function sleep(ms) {
    return new Promise (resolve => setTimeout(resolve,ms));
}

async function dealersLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(DEALER , card);
        updateScore(card , DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

function showCard (activePlayer , card) {
    if (activePlayer['score'] < 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `./static/img/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);

        hitSound.play();
    }
    
}

function dealButtonBlackjack () {

    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;

        let yourImage = document.querySelector("#your-box").querySelectorAll("img");
        let dealerImage = document.querySelector("#dealer-box").querySelectorAll("img");
    
        for (let i = 0; i < yourImage.length; i++){
            yourImage[i].remove();
        }
    
        for (let i = 0; i < dealerImage.length; i++){
            dealerImage[i].remove();
        }
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).textContent = 0;
        document.querySelector(YOU['scoreSpan']).style.color = "#fff";
        document.querySelector(DEALER['scoreSpan']).style.color = "#fff";
    
        document.querySelector("#blackjack-result").textContent = "Let's Play";
        document.querySelector("#blackjack-result").style.color = "black";
        blackjackGame['turnsOver'] = false;
    }
}

function randomCard () {
    let randomIndex = Math.floor(Math.random() * 12);
    return blackjackGame['cards'][randomIndex];
}

function updateScore (card , activePlayer) {
    if (card === "A"){
        if (activePlayer['score'] + blackjackGame['cardsMap'][card] <= 21) {
        activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else{
        activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }

}

function showScore (activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
        document.querySelector(activePlayer['scoreSpan']).style.color = "red";
    } else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function computeWinner () {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = YOU;
            blackjackGame['wins']++;

        } else if (DEALER['score'] > YOU['score']) {
            winner = DEALER;
            blackjackGame['loss']++;
        } else if (YOU['score'] === DEALER['score']){
            console.log('you Drew');
            blackjackGame['draws']++;

        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER;
        blackjackGame['loss']++;

    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        console.log("you Drew");
        blackjackGame['draws']++;

    }

    console.log("Winner is ", winner);
    return winner;
}

function showResult (winner) {
    if (blackjackGame['turnsOver'] === true) {

        let message, messageColor;
    
        if (winner === YOU){
            message = "You Won!";
            messageColor = "green";
            winSound.play();
        } else if (winner === DEALER) {
            message = "You Lost!";
            messageColor = "red";
            lossSound.play();
        } else {
            message = "You Draw!";
            messageColor = "black";
        }
    
        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = messageColor;
    
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        document.querySelector('#losses').textContent = blackjackGame['loss'];
        document.querySelector('#draws').textContent = blackjackGame['draws'];
    }
}
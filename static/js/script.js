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


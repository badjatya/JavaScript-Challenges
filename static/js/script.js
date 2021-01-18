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

    
}

function botChoiceGenrator () {
    var bot = Math.floor(Math.random() * 3);
    return ["rock", "paper" , "scissor"] [bot];
} 
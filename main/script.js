let identificationNumber = document.querySelector("#idNumber");
let textValue = document.querySelector("#idText");
let diceButton = document.querySelector("button");


fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(function(data){
        identificationNumber.innerHTML = data.slip.id
        textValue.innerHTML = data.slip.advice
        return data.slip
});


async function generate () {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(function(data){
        identificationNumber.innerHTML = data.slip.id
        textValue.innerHTML = data.slip.advice
});
}

diceButton.addEventListener ("click", () => {
    generate();
});




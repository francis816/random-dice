let ranNum1 = Math.floor(Math.random() * 6) + 1;
let ranNum2 = Math.floor(Math.random() * 6) + 1;

if (ranNum1 === 1) {
    document.getElementById('img1').setAttribute('src', "images/dice1.png")
}
if (ranNum1 === 2) {
    document.getElementById('img1').setAttribute('src', "images/dice2.png")
}
if (ranNum1 === 3) {
    document.getElementById('img1').setAttribute('src', "images/dice3.png")
}
if (ranNum1 === 4) {
    document.getElementById('img1').setAttribute('src', "images/dice4.png")
}
if (ranNum1 === 5) {
    document.getElementById('img1').setAttribute('src', "images/dice5.png")
}
if (ranNum1 === 6) {
    document.getElementById('img1').setAttribute('src', "images/dice6.png")
}

if (ranNum2 === 1) {
    document.getElementById('img2').setAttribute('src', "images/dice1.png")
}
if (ranNum2 === 2) {
    document.getElementById('img2').setAttribute('src', "images/dice2.png")
}
if (ranNum2 === 3) {
    document.getElementById('img2').setAttribute('src', "images/dice3.png")
}
if (ranNum2 === 4) {
    document.getElementById('img2').setAttribute('src', "images/dice4.png")
}
if (ranNum2 === 5) {
    document.getElementById('img2').setAttribute('src', "images/dice5.png")
}
if (ranNum2 === 6) {
    document.getElementById('img2').setAttribute('src', "images/dice6.png")
}

if (ranNum1 > ranNum2) {
    document.querySelector('h1').innerHTML = `<h1><img style="width = "50px" height = "50px";" src="images/victory-hand.png">Player 1 Wins!</h1>`
} else if (ranNum1 < ranNum2) {
    document.querySelector('h1').innerHTML = `<h1>Player 2 Wins!<img style="width = "50px" height = "50px";" src="images/victory-hand.png"></h1>`
} else {
    document.querySelector('h1').innerHTML = `<h1>It is a tie!</h1>`
}


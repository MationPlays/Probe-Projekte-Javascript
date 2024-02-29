"use strict"

// Variablen für das Spiel
let punktzahl = 0;
let moleShowed = false;
let moleClicked = true;
let life = 5;
let gegner = false;
let counter = document.getElementById('counter');
let lives = document.getElementById('lives');
let highS = document.getElementById('highS');


// alle 16 Maulwürfe werden in Konstante gegeben
const mole1 = document.getElementById('mole1');
const mole2 = document.getElementById('mole2');
const mole3 = document.getElementById('mole3');
const mole4 = document.getElementById('mole4');
const mole5 = document.getElementById('mole5');
const mole6 = document.getElementById('mole6');
const mole7 = document.getElementById('mole7');
const mole8 = document.getElementById('mole8');
const mole9 = document.getElementById('mole9');
const mole10 = document.getElementById('mole10');
const mole11 = document.getElementById('mole11');
const mole12 = document.getElementById('mole12');
const mole13 = document.getElementById('mole13');
const mole14 = document.getElementById('mole14');
const mole15 = document.getElementById('mole15');
const mole16 = document.getElementById('mole16');

let randMole = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, mole10, mole11, mole12, mole13, mole14, mole15, mole16];
let alteZahl = -1; 
let zufallsZahl = 1;

let highscore = 0;

sessionStorage.setItem('highscore', highscore);

highscore = sessionStorage.getItem('highscore');



// Prüfen, ob Maulwurf geklickt wurde
function clickedMole(randMole) {
    if(moleShowed && randMole.style.opacity === '1'){
        if(gegner != true){
        punktzahl += 1;
    }
        counter.innerText = punktzahl;
        moleShowed = false;
        moleClicked = false;
        if(gegner != true){
        life += 1;
        } else {
            life -= 1;  
        }
        
    }
    console.log("Punktzahl:",punktzahl);
}



 mole1.addEventListener('click', function() {
    clickedMole(randMole[0]);

});

mole2.addEventListener('click', function() {
    clickedMole(randMole[1]);

});

mole3.addEventListener('click', function() {
    clickedMole(randMole[2]);

});

mole4.addEventListener('click', function() {
    clickedMole(randMole[3]);

});


mole5.addEventListener('click', function() {
    clickedMole(randMole[4]);

});

mole6.addEventListener('click', function() {
    clickedMole(randMole[5]);

});

mole7.addEventListener('click', function() {
    clickedMole(randMole[6]);

});

mole8.addEventListener('click', function() {
    clickedMole(randMole[7]);

});

mole9.addEventListener('click', function() {
    clickedMole(randMole[8]);

});

mole10.addEventListener('click', function() {
    clickedMole(randMole[9]);

});

mole11.addEventListener('click', function() {
    clickedMole(randMole[10]);

});

mole12.addEventListener('click', function() {
    clickedMole(randMole[11]);

});

mole13.addEventListener('click', function() {
    clickedMole(randMole[12]);

});

mole14.addEventListener('click', function() {
    clickedMole(randMole[13]);

});

mole15.addEventListener('click', function() {
    clickedMole(randMole[14]);

});

mole16.addEventListener('click', function() {
    clickedMole(randMole[15]);

});
 
function updateLife() {
    if(gegner !=true){
    life -= 1;
}
    if (life === 0) {
        // Hier wird Spielende angezeigt
        alert("Spiel vorbei! Deine Punktzahl: " + punktzahl);
        // das Spiel wird zurückgesetzt
        resetGame();
    }
    
}

//funktion, die Spiel zurücksetzt
function resetGame() {
    highscore = punktzahl;
    console.log("highscore:",highscore);
    sessionStorage.setItem('highscore', highscore);
    punktzahl = 0;
    life = 5;
    counter.innerText = punktzahl;
    lives.innerText = life;
    let hs = sessionStorage.getItem('highscore');
    console.log("highscore hs:",hs);
    //highS.innerText = hs;
    highS.innerHTML = `<p>Highscore: ${hs}</p>`;
}

//funktion, die Maulwurf erscheinen lässt
function showMole(randMole) {
    let zufallgegner = Math.floor(Math.random() * 3);
    if(zufallgegner == 1) {
        randMole.style.backgroundImage = 'url(img/piranha-plant.png)'; 
        gegner = true;
    }
    randMole.style.opacity = '1';
    moleShowed = true;
    moleClicked = false;
    updateLife();
}

//funktion, die Maulwurf verschwinden lässt
function hideMole(randMole) {
    randMole.style.opacity = '0';
    gegner = false;
    randMole.style.backgroundImage = 'url(img/monty-mole.png)';
    console.log("Life:",life);
    lives.innerText = life;
}


// Loop das die Maulwürfe erscheinen und verschwinden

function zeigeZufallsMole() {
    
    for (let index = 0; index < randMole.length; index++) {
        hideMole(randMole[index]);    
    }

    do {
        zufallsZahl = Math.floor(Math.random() * 16);
    } while (alteZahl === zufallsZahl);

    console.log(zufallsZahl);
    showMole(randMole[zufallsZahl]);

    // Aktualisiere alteZahl
    alteZahl = zufallsZahl;

    
}

// Die Zufallszahl alle 2 Sekunden ändern
setInterval(zeigeZufallsMole, 1500);


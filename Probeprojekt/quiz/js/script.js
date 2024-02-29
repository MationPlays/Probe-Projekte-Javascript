"use strict"



const frageContainer = document.getElementById("fragecontainer");

let frageIndex = 0;
let punktezahl = 0;

/* 
let xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (xhr.status != 200) return;

  let jsonData;
  
  if (xhr.getResponseHeader("content-type").indexOf("application/json") !== -1) {
    jsonData = xhr.response;
  } else {
    jsonData = JSON.parse(xhr.responseText);
  }

  // Variable Fragen setzen
  //let fragen = jsonData;
  //console.log(jsonData);
  let fragenJson = JSON.stringify(jsonData.fragen);
  localStorage.setItem('fragen', fragenJson);
  // generiereFrageHTML(0);
};

xhr.open("GET", "fragen.json");
xhr.responseType = "json";
xhr.send(); 

let fragen = JSON.parse(localStorage.getItem('fragenJson'));
console.log(fragen);
*/

let fragen = [
    {
      "frage": "Was ist die Hauptstadt von Frankreich?",
      "antworten": ["Berlin", "Paris", "Rom", "Madrid"],
      "korrekteAntwort": "Paris"
    },
    {
      "frage": "Welches ist das größte Säugetier der Welt?",
      "antworten": ["Elefant", "Walhai", "Giraffe", "Blauwal"],
      "korrekteAntwort": "Blauwal"
    },
    {
        "frage": "Was ist die Hauptstadt von Japan?",
        "antworten": ["Peking", "Tokio", "Seoul", "Bangkok"],
        "korrekteAntwort": "Tokio"
    },
    {
        "frage": "Wie viele Kontinente gibt es?",
        "antworten": ["4", "6", "7", "5"],
        "korrekteAntwort": "7"
    },
    {
        "frage": "Wer hat die Relativitätstheorie entwickelt?",
        "antworten": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        "korrekteAntwort": "Albert Einstein"
    },
    {
        "frage": "Was ist die chemische Formel für Wasser?",
        "antworten": ["H2O2", "CO2", "O2", "H2O"],
        "korrekteAntwort": "H2O"
    },
    {
        "frage": "In welchem Jahr wurde die Berliner Mauer gebaut?",
        "antworten": ["1950", "1961", "1975", "1989"],
        "korrekteAntwort": "1961"
    },
    {
        "frage": "Wer schrieb 'Romeo und Julia'?",
        "antworten": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        "korrekteAntwort": "William Shakespeare"
    },
    {
        "frage": "Wie viele Planeten gibt es in unserem Sonnensystem?",
        "antworten": ["6", "8", "9", "10"],
        "korrekteAntwort": "8"
    },
    {
        "frage": "Was ist die Hauptzutat in Guacamole?",
        "antworten": ["Tomaten", "Avocado", "Kartoffeln", "Zwiebeln"],
        "korrekteAntwort": "Avocado"
    },
    {
        "frage": "Wer hat die Glühbirne erfunden?",
        "antworten": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Marie Curie"],
        "korrekteAntwort": "Thomas Edison"
    },
    {
        "frage": "In welchem Jahr wurde der erste Computer erfunden?",
        "antworten": ["1940", "1955", "1969", "1976"],
        "korrekteAntwort": "1940"
    },
    {
        "frage": "Was ist die Hauptkomponente von Erdgas?",
        "antworten": ["Kohlenstoffdioxid", "Methan", "Stickstoff", "Wasserstoff"],
        "korrekteAntwort": "Methan"
    },
    {
        "frage": "Wer malte die Mona Lisa?",
        "antworten": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        "korrekteAntwort": "Leonardo da Vinci"
    },
    {
        "frage": "Wie viele Beine hat eine Spinne?",
        "antworten": ["4", "6", "8", "10"],
        "korrekteAntwort": "8"
    },
    {
        "frage": "Welcher Planet wird als der 'Rote Planet' bezeichnet?",
        "antworten": ["Erde", "Mars", "Venus", "Jupiter"],
        "korrekteAntwort": "Mars"
    },
    {
        "frage": "Wer schrieb 'Harry Potter'?",
        "antworten": ["J.K. Rowling", "George R.R. Martin", "Stephen King", "J.R.R. Tolkien"],
        "korrekteAntwort": "J.K. Rowling"
    },
    {
        "frage": "Welches ist das längste Fluss der Welt?",
        "antworten": ["Amazonas", "Nil", "Mississippi", "Jangtse"],
        "korrekteAntwort": "Nil"
    },
    {
        "frage": "Welcher Ozean liegt zwischen Nordamerika und Europa?",
        "antworten": ["Atlantischer Ozean", "Indischer Ozean", "Pazifischer Ozean", "Arktischer Ozean"],
        "korrekteAntwort": "Atlantischer Ozean"
    },
    {
        "frage": "Wer ist der Autor von 'Die Odyssee'?",
        "antworten": ["Homer", "Sophokles", "Euripides", "Aristoteles"],
        "korrekteAntwort": "Homer"
    },
    {
        "frage": "Welcher Berg ist der höchste der Welt?",
        "antworten": ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
        "korrekteAntwort": "Mount Everest"
    }
];




function pruefeAntwort(antwort) {

    switch (frageIndex) {
        case 0:
            if (antwort == fragen[frageIndex].antworten[1]) {
                antwortRichtig();
            } else {
                antwortFalsch();
            }
            break;
        
        case 1:
            if (antwort == fragen[frageIndex].antworten[3]) {
                antwortRichtig();
            } else {
                antwortFalsch();
            }
            break;
        case 2:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;

        case 3:
                if (antwort == fragen[frageIndex].antworten[2]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 4:
            if (antwort == fragen[frageIndex].antworten[1]) {
                antwortRichtig();
            } else {
                antwortFalsch();
            }
            break;
        case 5:
                if (antwort == fragen[frageIndex].antworten[3]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 6:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 7:
                if (antwort == fragen[frageIndex].antworten[0]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 8:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 9:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 10:
                if (antwort == fragen[frageIndex].antworten[0]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;

        case 11:
                if (antwort == fragen[frageIndex].antworten[0]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;

        case 12:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;

        case 13:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                    } else {
                    antwortFalsch();
                    }
                    break;
        case 14:
                if (antwort == fragen[frageIndex].antworten[2]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 15:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 16:
                if (antwort == fragen[frageIndex].antworten[0]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 17:
                if (antwort == fragen[frageIndex].antworten[1]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 18:
                if (antwort == fragen[frageIndex].antworten[0]) {
                    antwortRichtig();
                } else {
                    antwortFalsch();
                }
                break;
        case 19:
                if (antwort == fragen[frageIndex].antworten[0]) {
                    console.log("Glückwunsch! Die Antwort ist richtig!");
                    frageIndex += 1;
                    punktezahl += 2;
                    console.log("Deine Punktzahl:",punktezahl);
                    
                    generiereGewonnenHTML(punktezahl);
                } else {
                   antwortFalsch();
                }
                break;

        default:
            break;
    }
    
}


generiereFrageHTML(frageIndex);

function generiereFrageHTML(frageIndex) {

    frageContainer.innerHTML = `<h2 class="center">${fragen[frageIndex].frage}</h2>
    <div class="center">
    <div class="container" ><img class="image" src="img/frage${frageIndex + 1}.jpg" alt=""></div>
    ${zeigeAntworten(fragen[frageIndex].antworten)}
    </div>`;
}

function zeigeAntworten(antworten) {
    return antworten.map(antwort => `
        <button class="button" onclick="pruefeAntwort('${antwort}')">${antwort}</button>
    `).join('');
}

// Antwort richtig
 function antwortRichtig() {
    console.log("Glückwunsch! Die Antwort ist richtig!");
    frageIndex += 1;
    punktezahl += 1;
    console.log("Deine Punktzahl:",punktezahl);
                
    generiereFrageHTML(frageIndex);
 }

// Antwort falsch
 function antwortFalsch() {
    console.log("Leider ist die Antwort falsch!");
    generiereEndeHTML(punktezahl);

    frageIndex = 0;
    punktezahl = 0;
 }

 // Frage falsch beantwortet Endscreen
function generiereEndeHTML(punktezahl) {
    frageContainer.innerHTML = `<h2 class="center">Du hast die Frage leider falsch beantwortet!</h2>
     <div class="center">
     <div class="container" ><img class="image" src="img/verloren.jpg" alt=""></div>
     <p>Deine Punktzahl ist: ${punktezahl}</p>
     <button class="button" onclick="generiereFrageHTML(0)">Quiz erneut starten</button>
     </div>`; 
 }

 // Alle Fragen richtig beantwortet Endscreen
 function generiereGewonnenHTML(punktezahl) {
    frageContainer.innerHTML = `<h2 class="center">Du hast die Fragen alle richtig beantwortet!</h2>
     <div class="center">
     <div class="container" ><img class="image" src="img/gewonnen.jpg" alt=""></div>
     <p>Deine Punktzahl ist: ${punktezahl}</p>
     <button class="button" onclick="generiereFrageHTML(0)">Quiz erneut starten</button>
     </div>`; 


 }








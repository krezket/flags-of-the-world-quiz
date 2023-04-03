let mainEl = document.querySelector(".main");
let timeE1 = document.querySelector(".timer");
let btnEl = document.querySelector("#start");
let start = true

let options =  document.querySelector(".options");

let randomFlag = " "
let imgSrc = [
    {
    country: "assets/images/1200px-Flag_of_Denmark_fixed.svg.png",
    answers: [        
        {a: "Norway", isCorrect: false},
        {b: "United Kingdom", isCorrect: false},
        {c: "Denmark", isCorrect: true},
        {d: "Estonia", isCorrect: false},
    ]
    },

    {
    country: "assets/images/canada.jpg",
    answers: [
        {a: "Russia", isCorrect: false},
        {b: "United Kingdom", isCorrect: false},
        {c: "France", isCorrect: false},
        {d: "Canada", isCorrect: true},
    ]
    },

    {
    country: "assets/images/Flag_of_Egypt.svg.png",
    answers: [
        {a: "Syria", isCorrect: false},
        {b: "Egypt", isCorrect: true},
        {c: "Lebanon", isCorrect: false},
        {d: "Kenya", isCorrect: false},
    ],
    },

    {
    country: "assets/images/Flag_of_Italy.svg.png",
    answers: [
        {a: "Italy", isCorrect: true},
        {b: "Mexico", isCorrect: false},
        {c: "France", isCorrect: false},
        {d: "Austria", isCorrect: false},
    ],
    }, 

    {
    country: "assets/images/Flag_of_Mexico.svg.png",
    answers: [
        {a: "Honduras", isCorrect: false},
        {b: "Mexico", isCorrect: true},
        {c: "Guatemala", isCorrect: false},
        {d: "Italy", isCorrect: false},
    ],
    },
    
    {
    country: "assets/images/Flag_of_Norway.svg.png",
    answers: [
        {a: "Iceland", isCorrect: false},
        {b: "Sweden", isCorrect: false},
        {c: "Belgium", isCorrect: false},
        {d: "Norway", isCorrect: true},
    ],
    },

    {
    country: "assets/images/Flag_of_Russia.svg.png",
    answers: [
        {a: "Belarus", isCorrect: false},
        {b: "Russia", isCorrect: true},
        {c: "Latvia", isCorrect: false},
        {d: "France", isCorrect: false},
    ],
    },

    {
    country: "assets/images/south_africa.jpg",
    answers: [
        {a: "Zimbabwe", isCorrect: false},
        {b: "Madagascar", isCorrect: false},
        {c: "South Africa", isCorrect: true},
        {d: "Uganda", isCorrect: false},
    ],
    },

    {
    country: "assets/images/spain.jpg",
    answers: [
        {a: "Spain", isCorrect: true},
        {b: "France", isCorrect: false},
        {c: "Portugal", isCorrect: false},
        {d: "Belgium", isCorrect: false},
    ],
    }
]


let secondsLeft = 241;

function countdown(){
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timeE1.textContent = "Time left: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            mainEl.textContent = " "
        }
    }, 1000);
    pickRandom();
}

function pickRandom(){
    mainEl.textContent = " ";
    randomFlag = imgSrc[Math.floor(Math.random() * imgSrc.length)]
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", randomFlag.country);
    imgEl.setAttribute("style", "width: 300px;");
    mainEl.appendChild(imgEl);
    
    startGame()
}

function startGame(){
    let op1 = document.createElement("button");
    op1.textContent = randomFlag.answers[0]
    mainEl.appendChild(op1);
    let op2 = document.createElement("button");
    op2.textContent = randomFlag.answers[1]
    mainEl.appendChild(op2);
    let op3 = document.createElement("button");
    op3.textContent = randomFlag.answers[2]
    mainEl.appendChild(op3);
    let op4 = document.createElement("button");
    op4.textContent = randomFlag.answers[3]
    mainEl.appendChild(op4);
    console.log(randomFlag.answers)
}

btnEl.addEventListener("click", function(){
    countdown();
})
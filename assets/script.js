let mainEl = document.querySelector(".main");
let timeE1 = document.querySelector(".timer");
let btnEl = document.querySelector("#start");
let options =  document.querySelector(".options");

let count = []

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
    },

    {
    country: "assets/images/750px-Flag_of_Argentina_(3-2).svg.png",
    answers: [
        {a: "Bolivia", isCorrect: false},
        {b: "Argentina", isCorrect: true},
        {c: "Costa Rica", isCorrect: false},
        {d: "Brazil", isCorrect: false},
    ],
    },

    {
    country: "assets/images/Flag_of_Laos.svg.png",
    answers: [
        {a: "Bhutan", isCorrect: false},
        {b: "Nepal", isCorrect: false},
        {c: "Laos", isCorrect: true},
        {d: "Thailand", isCorrect: false},
    ],
    },
    
]

secondsLeft = 241;

function countdown(){
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timeE1.textContent = "Time left: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            mainEl.textContent = " "
            endStats()
        }
    }, 1000);
    init();
}

function init() {
    let storedCount = JSON.parse(localStorage.getItem("count"))
    if (storedCount != null) {
        count = storedCount
    }
    pickRandom()
}

function pickRandom(){
    let theAnswer = true;
    
    let nextBtn = document.createElement("button")
    nextBtn.textContent = "Next Flag"
    let head = document.createElement("p")
    head.textContent = "Name this flag:";
    
    mainEl.textContent = " ";

    randomFlag = imgSrc[Math.floor(Math.random() * imgSrc.length)]
    console.log(randomFlag)
    localStorage.setItem("count", JSON.stringify(randomFlag.country))

    // adds the image
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", randomFlag.country);
    imgEl.setAttribute("style", "width: 400px;");
    mainEl.appendChild(imgEl);
    
    // adds 
    mainEl.appendChild(head);
    let op1 = document.createElement("button");
    op1.textContent = randomFlag.answers[0].a
    mainEl.appendChild(op1);
    op1.setAttribute("style", "font-size: 30px; margin: 1%;")

    op1.addEventListener("click", function(){
        let response1 = undefined;
        response1 = randomFlag.answers[0].isCorrect
        if (response1 === theAnswer) {
            mainEl.textContent = " ";
            mainEl.textContent = "CORRECT!";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
            
        }
        else {
            mainEl.textContent = " ";
            mainEl.textContent = "bruh";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
        }
    })

    let op2 = document.createElement("button");
    op2.textContent = randomFlag.answers[1].b
    mainEl.appendChild(op2);
    op2.setAttribute("style", "font-size: 30px; margin: 1%;")
   
    op2.addEventListener("click", function(){
        let response2 = undefined;
        response2 = randomFlag.answers[1].isCorrect
        if (response2 === theAnswer) {
            mainEl.textContent = " ";
            mainEl.textContent = "CORRECT!";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
        }
        else {
            mainEl.textContent = " ";
            mainEl.textContent = "bruh";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
        }
    })
    
    let op3 = document.createElement("button");
    op3.textContent = randomFlag.answers[2].c
    mainEl.appendChild(op3);
    op3.setAttribute("style", "font-size: 30px; margin: 1%;")

    op3.addEventListener("click", function(){
        let response3 = undefined;
        response3 = randomFlag.answers[2].isCorrect
        if (response3 === theAnswer) {
            mainEl.textContent = " ";
            mainEl.textContent = "CORRECT!";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
        }
        else {
            mainEl.textContent = " ";
            mainEl.textContent = "bruh";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
        }
    })
    
    let op4 = document.createElement("button");
    op4.textContent = randomFlag.answers[3].d
    mainEl.appendChild(op4);
    op4.setAttribute("style", "font-size: 30px; margin: 1%;")

    op4.addEventListener("click", function(){
        let response4 = undefined;
        response4 = randomFlag.answers[3].isCorrect
        if (response4 === theAnswer) {
            mainEl.textContent = " ";
            mainEl.textContent = "CORRECT!";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
        }
        else {
            mainEl.textContent = " ";
            mainEl.textContent = "bruh";
            nextBtn.setAttribute("style", "font-size: 30px;")
            mainEl.appendChild(nextBtn)
            nextBtn.addEventListener("click", function(){
                
                pickRandom()
            })
        }
    })
    
    endStats()
}

let correct
let incorrect

function endStats(){
    
}

btnEl.addEventListener("click", function(){
    countdown();
})
// let random1 = Math.floor((Math.random()) * 101 );
//
// let random2 = Math.floor((Math.random()) * 101 );
//
// console.log(random1,random2);
//
// let questionOne = prompt("What is " + random1 + " times " + random2);

let modeDifficulty = prompt("for easy mode type EASY for hard mode type HARD")

if(modeDifficulty === "HARD") {
    function hardQuestion(input) {
        let random1 = Math.floor((Math.random()) * 101);
        let random2 = Math.floor((Math.random()) * 101);
        prompt("What is " + random1 + " times " + random2);
        let answer = random1 * random2;
        if (answer === parseFloat(input)) {
            return alert("Good Job!");
        } else {
            return alert("Sorry, the correct answer was " + answer);
        }
    }
    console.log(hardQuestion())
}

if(modeDifficulty === "EASY") {
    function easyQuestion(input) {
        let random1 = Math.floor((Math.random()) * 11);
        let random2 = Math.floor((Math.random()) * 11);
        prompt("What is " + random1 + " times " + random2);
        let answer = random1 * random2;
        if (parseFloat(input) == answer) {
            return alert("Good Job!");
        } else {
            return alert("Sorry, the correct answer was " + answer);
        }
    }

    console.log(easyQuestion())
}
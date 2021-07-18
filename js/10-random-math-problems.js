let random1 = Math.floor((Math.random()) * 101 );

let random2 = Math.floor((Math.random()) * 101 );

console.log(random1,random2);

let questionOne = prompt("What is " + random1 + " times " + random2);

function answerOne(){
    let answer = random1 * random2;
    if(answer === questionOne){
        return alert("Good Job!");
    } else {
        return alert("Sorry, the correct answer was " + answer);
    }
}
 console.log(answerOne());
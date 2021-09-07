var readlineSync = require("readline-sync");
console.log("\t\t\t\t\t\t\t\tWelcome to the Quiz");
var userName = readlineSync.question("What is your Name?\n");
console.log("Welcome "+userName+" in the Quiz about CryptoCurrency!!\n")
var score = 0;


function play(question,answer) {
  var userAnswer  = readlineSync.question(question);
  if (userAnswer == answer){
    console.log("You are right!")
    score+=1;
  }else{
    console.log("You are wrong!")
  }
  console.log("current score "+score);
  console.log("------------");
}

var questions = [{
  question:"which one is most expensive coin in Crypto?\n",
  answer:"bitcoin"
},
{
  question:"which one second most valuable in Crypto?\n",
  answer:"ethereum"
},
{
  question:"Which coin is meme coin?\n",
  answer:"dogecoin"
},
{
  question:"which coin is developed by the indian company?\n",
  answer:"polygon"
},
{
  question:"CryptoCurrency is the future?\n",
  answer:"yes"
},]

for(var i=0; i<questions.length; i++){
  var correctQuestion = questions[i];
  play(correctQuestion.question,correctQuestion.answer);
}

console.log("YAYYYY!! You Scored "+score);
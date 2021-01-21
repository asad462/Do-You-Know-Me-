var readlineSync = require("readline-sync");
var userName = readlineSync.question(" What is your name? ");
console.log("Welcome to 'Do You Know Me?'");
var score = 0;
function Quizxo(question,answer){
  var ans = readlineSync.question(question);
  if(ans === answer){
    console.log("You are right!");
    score = score + 1;
  }
  else{
    console.log("You are wrong!");
    console.log("The correct answer is : ", answer);
  }
  console.log("The score is :", score);
}
  quizList = [{
    question: " What is my Full Name? ",
    answer: "Mir Asaduddin Adil"
    }, 
    {
      question: " What do I like the most? ",
      answer: "Cars" 
      },
    {
      question: " What types of cars do I like the most? ",
      answer: "Tuner Cars" 
    },
    {
      question: " When is my Birthday? ",
      answer: "April 1"
    },
    {
      question: " What type of bikes do I like? ",
      answer: "Cafe Racers"
    },
    {
      question: " Which is my favourite bike? ",
      answer: "Ducati Scrambler Cafe Racer"
    },
    {
      question: " Do I like Superbikes? ",
      answer: "No"
    }
    ];
  for(var i = 0; i < quizList.length; i++ ){
    currentQues = quizList[i];
    Quizxo(currentQues.question,currentQues.answer);
    }
  console.log("You have scored : ", score);
  console.log("Thank You! (^_^)");
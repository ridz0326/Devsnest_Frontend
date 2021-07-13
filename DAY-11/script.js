let questions = [
  {
    question: "What was the Professor's real name?",
    options: ["Ricardo Ramos", "Sergio Marquina", "Andres de Fonollosa", "Agustin Ramos"],
    answer: 1,
  },
  {
    question: "Who planned the Bank of Spain heist?",
    options: ["The Professor's father", "The Professor", "Berlin", "Palermo"],
    answer: 2,
  },
  {
    question: "What was the relation between Berlin and The Professor?",
    options: ["Best Friend","Friend's Brother","Real Brother","Lovers"],
    answer: 2,
  },
  {
    question: "Where did Raquel find The Professor after the first heist?",
    options: ["Sri Lanka","Maldives","Indonesia","Thailand"],
    answer: 3,
  },
  {
    question: "Who was Gandia?",
    options: ["Hostage","Robber","S.W.A.T","Personal Security Guard"],
    answer: 3,
  },
  {
    question: "Rio was known for committing which crime before his heist days?",
    options: ["Runaway robbing","Jewellery stealing","Computer hacking","Running a drug racket"],
    answer: 2,
  },
  {
    question: "What is the real name of Tokyo in Money Heist?",
    options: ["Alicia Sierra", "Silene Oliveira", "Ágata Jiménez", "Mónica Gaztambide"],
    answer: 1,
  },
  {
    question: "How many robbers died till the 2nd heist?",
    options: ["Three","Four","Five","Six"],
    answer: 1,
  },
  {
    question:
      "How does Professor tell Raquel that he knows she is alive?",
    options: ["He sent a letter to her","He calls her", "He surrender himself", "He sent his watch"],
    answer: 3,
  },
  {
    question: "How much money does the gang steal from the heist at Royal Mint of Spain?",
    options: ["850 Million", "899 Million", "900 Million", "984 Million"],
    answer: 3,
  },
];

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let quizSection = document.querySelector(".quiz-section");

//creating questions card for each cards
shuffle(questions);

const quesArray = questions.map((currQues, quesNo) => {
  const container = document.createElement("div");
  container.className = "quiz-card";

  quizSection.append(container);

  const question = document.createElement("div");
  question.className = "quiz-ques";
  question.innerText = `Q${quesNo + 1}  ${currQues.question}`;
  container.append(question);

  const options = document.createElement("div");
  options.className = "quiz-option";
  container.append(options);

  let isClicked = false;

  const optionButtons = currQues.options.map((option) => {
    const optionButton = document.createElement("button");
    optionButton.className = "option";

    optionButton.addEventListener("click", (e) => {
      if (!isClicked) {
        isClicked = true;
      } else {
        return;
      }
      check(option, currQues, optionButton);

      //   console.log(option);
      //   console.log(currQues.options[currQues.answer]);
    });
    optionButton.innerText = option;
    return optionButton;
  });

  shuffle(optionButtons);
  optionButtons.forEach((option) => {
    options.append(option);
  });

  //return the array of ques (map function)
  return container;
});

// console.log(quesArray);
quesArray[0].classList.add("curr-quiz");

let currQuesNo = 0;
let showScore = document.querySelector("#score");
let score = 0;

//checks if option is correct
function check(option, currQues, optionButton) {
  if (option === currQues.options[currQues.answer]) {
    optionButton.classList.add("correct");
    score++;
    showScore.innerText = `${score}/10`;
  } else {
    optionButton.classList.add("wrong");
  }

  setTimeout(() => {
    quesArray[currQuesNo].classList.remove("curr-quiz");
    currQuesNo++;
    quesArray[currQuesNo].classList.add("curr-quiz");
  }, 1000);
}

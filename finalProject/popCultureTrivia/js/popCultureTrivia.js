//variables for text and counter
var text = $('#playArea');
var countNumber = 20;

//Questions for trivia, total of 20 with category images
var questions = [{
  question: "Michael Scott is a character from <br> which popular U.S. TV show?",
  answers: ["South Park", "Seinfeld", "The Big Bang Theory", "The Office"],
  correctAnswer: "The Office",
  image:"media/iconTV.png"
}, {
  question: "With which fruit do humans <br> share 60% of their DNA?",
  answers: ["Mangos", "Bananas", "Raspberries", "Blueberries"],
  correctAnswer: "Bananas",
  image:"media/iconScience.png"
}, {
  question: "Which actor plays Captain Jack Sparrow <br> in the <i>Pirates of the Caribbean</i> movies?",
  answers: ["Johnny Depp", "Orlando Bloom", "The Rock", "Jim Carrey"],
  correctAnswer: "Johnny Depp",
  image:"media/iconMovie.png"
}, {
  question: "Who is Kim Kardashian married to?",
  answers: ["Drake", "Jay Z", "Kanye West", "Tristan Thompson"],
  correctAnswer: "Kanye West",
  image:"media/iconInfluencer.png"
}, {
  question: "Who is a not a <i>Friends</i> character?",
  answers: ["Elliot", "Emma", "Rachel", "Chandler"],
  correctAnswer: "Elliot",
  image:"media/iconTV.png"
}, {
  question: "Who was Angelina Jolie married <br> to most recently?",
  answers: ["Matt Damon", "Brad Pitt", "Daniel Craig", "Josh Brolin"],
  correctAnswer: "Brad Pitt",
  image:"media/iconActor.png"
}, {
  question: "Who's famous phrase is 'Float like a <br> butterfly, sting like a bee'?",
  answers: ["Mike Tyson", "The Rock", "Muhammad Ali", "Lightning McQueen"],
  correctAnswer: "Muhammad Ali",
  image:"media/iconInfluencer.png"
}, {
  question: "Who won the first ever <i>American Idol</i> ?",
  answers: ["Kelly Clarkson", "Ruben Studdard", "Jennifer Hudson", "Carrie Underwood"],
  correctAnswer: "Kelly Clarkson",
  image:"media/iconTV.png"
}, {
  question: "What is the longest running game <br> show on television?",
  answers: ["Wheel of Fortune</i>", "Catch 21", "Let's Make A Deal", "The Price Is Right"],
  correctAnswer: "The Price Is Right",
  image:"media/iconTV.png"
}, {
  question: "Which actor said 'I'm a cotton <br> headed ninny muggins' in <i>Elf</i> ?",
  answers: ["Bob Newhart", "Will Ferrel", "Seth Rogan", "James Franco"],
  correctAnswer: "Will Ferrel",
  image:"media/iconActor.png"
}, {
  question: "Which female singer released a song <br> in 2013 called <i>Wrecking Ball</i> ?",
  answers: ["Cardi B", "Ariana Grande", "Nicki Minaj", "Miley Cyrus"],
  correctAnswer: "Miley Cyrus",
  image:"media/iconMusic.png"
}, {
  question: "'It's a Bird, It's a Plane, It's ...'",
  answers: ["Batman", "Trump", "Superman", "Lady Gaga"],
  correctAnswer: "Superman",
  image:"media/iconInfluencer.png"
}, {
  question: "Which boy band had a hit song in 1999 <br> called <i>I Want It That Way</i> ?",
  answers: ["NSYNC", "New Kids on the Block", "Backstreet Boys", "Boyz II Men"],
  correctAnswer: "Backstreet Boys",
  image:"media/iconMusic.png"
}, {
  question: "What iconic comic book creator appeared <br> in camios of <i>Marvel</i> Movies?",
  answers: ["Frank Miller", "Kevin Smith", "Joss Whedon", "Stan Lee"],
  correctAnswer: "Stan Lee",
  image:"media/iconMovie.png"
}, {
  question: "<i>Let it Go</i> is a poplar song from what <br> <i>Disney</i> movie released in 2013?",
  answers: ["Mulan", "Frozen", "The Little Mermaid", "Moana"],
  correctAnswer: "Frozen",
  image:"media/iconMovie.png"
}, {
  question: "What is the name of the DC movie starring <br> Will Smith and Margot Robbie?",
  answers: ["Suicide Squad", "Justice League", "The Avengers", "Batman Begins"],
  correctAnswer: "Suicide Squad",
  image:"media/iconMovie.png"
}, {
  question: "Which JK. Rowling book turned into a movie franchise staring Daniel Radcliffe?",
  answers: ["The Lord of the Rings", "Twilight", "Harry Potter", "The Hunger Games"],
  correctAnswer: "Harry Potter",
  image:"media/iconMovie.png"

}, {
  question: "The <i>Mamma Mia</i> soundtrack <br> covers which bands songs?",
  answers: ["The Goo Goo Dolls", "The Bettles", "The Monkeys", "ABBA"],
  correctAnswer: "ABBA",
  image:"media/iconMusic.png"
}, {
  question: "Kate Winslet played Rose in <i>Titanic</i>,<br> but who was the leading man?",
  answers: ["Tom Cruise", "Leonardo DiCaprio", "Brad Pitt", "George Clooney"],
  correctAnswer: "Leonardo DiCaprio",
  image:"media/iconActor.png"
}, {
  question: "What is the remainder of the popular <br> game frandchises title: <i>Call of...</i>?",
  answers: ["Duty", "Doom", "Night", "War"],
  correctAnswer: "Duty",
  image:"media/iconVideoGame.png"
}];
//click function for resetting game 
$(document).on('click', '#game-over', function(e) {
  game.reset();
});
//select answer function
$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});
//timer function to allow for reset and countdown
$(document).on('click', '#timer', function(e) {
  $('#loadArea').prepend('<h4><span id="counter-number">20</span></h4>');
  game.presentQuestion();
});
//game elements and countdown
var game = {
  questions:questions,
  currentQuestion:0,
  counter:countNumber,
  correct:0,
  incorrect:0,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      game.finishedTime();
    }
  },
//show question to user function whic also allows image to be shown
  presentQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    text.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    text.append('<img class="graphic" src="' + questions[this.currentQuestion].image + '" />');
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++ ){
      text.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
  //next question function after answer is selected
  nextQuestion: function(){
    game.counter = countNumber;
    $('#counter-number').html(game.counter);
    game.currentQuestion++;
    game.presentQuestion();
  },
  //times up funtion that displays message and accounts for unanswered quation result
  finishedTime: function (){
    clearInterval(timer);
    $('#counter-number').html(game.counter);

    text.html('<h5>Your time is Up!</h5>');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },
  //displays results or the player to see score and allow them to approve or be happy for perfect score
  results: function() {
    $("h4").css("display","none");
    $('#counter-number').hide();
    text.html('<h6>Your Score:</h6>');
    text.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    text.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    text.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
    text.append('<br><button id="game-over">Play Again!</button>');
    this.counter = countNumber;
    clearInterval(timer);
  },
  //clicked function which accounts for right or wrong result to final result
  clicked: function(e) {
    clearInterval(timer);

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
      this.rightAnswer();
    } else {
      this.wrongAnswer();
    }
  },
  //wrong answer tally then next question display
  wrongAnswer: function() {
    game.incorrect++;
    clearInterval(timer);

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },
  //right answer tally then next question display
  rightAnswer: function(){
    clearInterval(timer);
    game.correct++;

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },
  //reset game upon click to play again and user can improve score
  reset: function(){
    $("h4").css("display","block");
    $('#counter-number').show();
    this.counter = countNumber;
    this.currentQuestion = 0;
    this.correct = 0;
    this.incorrect = 0;
    this.presentQuestion();
  }
};

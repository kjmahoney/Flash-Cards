//**********CARD DECKS**********

//Question Deck**********
var toLearn = [ //Cards presented to user
['狮子','Lion','Shīzi'], //*Each array includes a third field for use in future releases. Not used currently
['斑马','Zebra','Bānmǎ'],
['象','Elephant','Xiàng'],
['鬣狗','Hyena','Liègǒu'],
['犀牛','Rhino','Xīniú'],
['河马','Hippo','Hémǎ'],
['长颈鹿','Giraffe','asdf'],
['鳄鱼','Crocodile','èyú'],
['大猩猩','Gorilla','dà xīngxīng'],
['黑猩猩','Chimpanzee','hēixīngxīng']
]

//Mastered Deck*********
var learned = []//Cards moved from toLearned to learned once mastered by user

//**********STORED VARIABLES**********

var questionBox = $('#indexCard').children().eq(0) //Represents the flash card
var i = 0 //counter that moves vertically through the deck (new cards)
var h = 0 //counter that moves horizontally through the deck (flip the card)

var score = 0 //Stores number of mastered cards
var scoreBoard = $('#table').children().eq(1) //Represents the scoreboard
var maxScore = toLearn.length //maximum acievable score based on number of cards


//*********FUNCTIONS**********

//Start Button Function**********
$('#startButton').on("click", startCards) //introduces the first card upon click of start button
function startCards(){
  var output = toLearn[i][h]
  console.log(output);
  console.log(i)
  questionBox.text(output);
  scoreBoard.text(score + "/" + maxScore)
}
//Next Card Function**********
function nextCard() { //functionality for when the next card is called via arrow or a 'correct' answer
  i = i + 1
    if (i >= toLearn.length){ //If statement to prevent i from exceeding number of cards
      i = 0
    }
    if (toLearn.length <= 0){ //ends session if user has learned all cards
      alert("Congrats you have mastered this deck!")
      questionBox.text("Congrats!");
    }
  h = 0 //presents the front of the card when a new card is presented
  var output = toLearn[i][h]
  questionBox.text(output);
}

//Previous Card Function**********
  function previousCard() {
    i = i - 1 //Need if statement to prevent i counter from going negative
      if (i< 0){
         i = (toLearn.length-1)
      }
    h = 0
    var output = toLearn[i][h]
    questionBox.text(output);
  }

//********************USER KEYS******************

//Up and Down Key**********
$(document).keydown(function(e) { //Keying up or down flips the card by moving the h counter
    if(e.which == 40 || e.which == 38 ) {
        h = h + 1
          if (h > 1) {
            h = 0
          }
        var output = toLearn[i][h]
        questionBox.text(output);
      }
});
//Y and N Keys**********
$(document).keypress(function(e) { //Keying 'Y' triggers 'correct', removes the card from the toLearn deck and into the 'learned' deck
      if(e.which == 89 || e.which ==121) { //if the user knows the answer the score is updated and moves to next card
      alert("Great!");
      learned.push(toLearn[i])
      toLearn.splice(i,1)
          if (score < 10){ //if score is not 10, the user continues play
            score = score + 1
            scoreBoard.text(score + "/" + maxScore)
            nextCard()//moves to next card if correct
          }else { //else statement prevents the score-board from exceeding max score
            score = maxScore
            scoreBoard.text(score + "/" + maxScore)
      }
     }
      if(e.which == 88 || e.which ==120) { //if user doesnt know card, it will remain in the deck
      alert("The card will remain in the deck");
     }
})

//Right Arrow Key************
$(document).keydown(function(e) { //right arrow key to trigger next card function
    if(e.which == 39) {
        nextCard()
    }
});

//Left Arrow Key***********
$(document).keydown(function(e) { //left arrow key to trigger previous card function
    if(e.which == 37) {
        previousCard()
    }
});

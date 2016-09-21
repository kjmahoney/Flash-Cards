var toLearn = [
['狮子','Lion','Shīzi'],
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

var learned = []

var questionBox = $('#indexCard').children().eq(0) //sets variables to be used throughout the program
var i = 0 //moves vertically through the deck (new cards)
var h = 0 //moves horizontally through the deck (flip the card)

var score = 0 //Prepares the scoreboard
var scoreBoard = $('#table').children().eq(1)
var maxScore = toLearn.length

$('#startButton').on("click", startCards) //introduces the first card
function startCards(){
  var output = toLearn[i][h]
  console.log(output);
  console.log(i)
  questionBox.text(output);
  scoreBoard.text(score + "/" + maxScore)
}

function nextCard() {
  i = i + 1 //Need if statement in case i is too high
    if (i >= toLearn.length){
      i = 0
    }
    if (toLearn.length <= 0){ //if user has learned all cards
      alert("Congrats you have mastered this deck!")
      questionBox.text("Congrats!");
    }
  h = 0
  var output = toLearn[i][h]
  questionBox.text(output);
}

function previousCard() {
  i = i - 1 //Need if statement in case i is too high
    if (i< 0){
       i = (toLearn.length-1)
    }
  }

$(document).keydown(function(e) { //This section allows you to flip the card
    if(e.which == 40 || e.which == 38 ) {
        h = h + 1
          if (h > 1) {
            h = 0
          }
        var output = toLearn[i][h]
        questionBox.text(output);
      }
});

$(document).keypress(function(e) { //This section allows you to flip the card
      if(e.which == 89 || e.which ==121) { //if the user knows the answer
      alert("Great!");
      learned.push(toLearn[i])
      toLearn.splice(i,1)
          if (score < 10){ //if score is not 10, the user continues play
            score = score + 1
            scoreBoard.text(score + "/" + maxScore)
            nextCard()
          }else { //Victory condition
            score = 10
            scoreBoard.text(score + "/" + maxScore)
      }
     }
      if(e.which == 88 || e.which ==120) { //if user is incorrect
      alert("The card will remain in the deck");
     }
})

$(document).keydown(function(e) { //right arrow key to next card
    if(e.which == 39) {
        nextCard()
    }
});

$(document).keydown(function(e) { //left arrow key to previous card
    if(e.which == 37) {
        previousCard()
    }
});

function previousCard() {
  i = i - 1 //Need if statement in case i is too high
    if (i< 0){
       i = (toLearn.length-1)
    }
  h = 0
  var output = toLearn[i][h]
  questionBox.text(output);
}

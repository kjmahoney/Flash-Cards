var toLearn = [  //Represents a deck of flash cards
['狮子','lion','Shīzi'],
['斑马','zebra','Bānmǎ'],
['象','elephant','Xiàng'],
['鬣狗','hyena','Liègǒu'],
['犀牛','rhino','Xīniú'],
['河马','hippo','Hémǎ'],
['长颈鹿','giraffe','asdf'],
['鳄鱼','crocodile','èyú'],
['大猩猩','gorilla','dà xīngxīng'],
['黑猩猩','chimpanzee','hēixīngxīng']
]

var learned = []

var questionBox = $('#indexCard').children().eq(0) //sets variables to be used throughout the program
var i = 0 //moves vertically through the deck (new cards)
var h = 0 //moves horizontally through the deck (flip the card)

$('#startButton').on("click", startCards) //introduces the first card
function startCards() {
  var output = toLearn[i][h]
  console.log(output);
  console.log(i)
  questionBox.text(output);
}

$('#nextButton').on("click", nextCard)
function nextCard() {
  i = i + 1 //Need if statement in case i is too high
    if (i>=toLearn.length){
      i = 0
    }
  h = 0
  var output = toLearn[i][h]
  questionBox.text(output);
  console.log(i)
}

function previousCard() {
  i = i - 1 //Need if statement in case i is too high
    if (i< 0){
       i = (toLearn.length-1)
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
      if(e.which == 89 || e.which ==121) {
      alert("correct");
      learned.push(toLearn[i])
      toLearn.splice(i,1)
     }
      if(e.which == 88 || e.which ==120) { //Need to insert array manipulation
      alert("incorrect");
     }

})

$(document).keydown(function(e) { //right arrow key
    if(e.which == 39) {
        nextCard()
    }
});

$(document).keydown(function(e) { //right arrow key
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
  console.log(i)
  console.log(toLearn)
}












//change css class

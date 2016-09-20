var toLearn = [  //Represents a deck of flash cards
['狮子','lion','Shīzi'],
['斑马','zebra','Bānmǎ'],
['象','elephant','Xiàng'],
['鬣狗','hyena','Liègǒu'],
['犀牛','rhino','Xīniú']
]

var learned = []

var questionBox = $('#indexCard').children().eq(0) //sets variables to be used throughout the program
var i = 0 //moves vertically through the deck (new cards)
var h = 0 //moves horizontally through the deck (flip the card)

$('#startButton').on("click", startCards) //introduces the first card
function startCards() {
  var output = toLearn[i][h]
  console.log(output);
  questionBox.text(output);

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

      $(document).keypress(function(e) { //This section allows you to flip the card
            if(e.which == 89 || e.which ==121) {
            alert("correct");
            learned.push(toLearn[i])
            delete toLearn[i]
           }
            if(e.which == 88 || e.which ==120) { //Need to insert array manipulation
            alert("incorrect");
           }

      })
});




//change css class

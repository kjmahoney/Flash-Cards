 technologies used,
 the approach taken,
 installation instructions,
 unsolved problem

bronze

1. create var flashCards {  *pull attributes from array*
    lion : [chinese, english]
    giraffe: [chinese, english]
    gorilla: [chinese, english]
  }

  create var knowncards {}

squirrel
dog
cat

3. startButton{
  create counter
  i = 0
4. Presented card
  output = flashCards[i]

  up and down arrow to flip card
  onKeyDown and onKeyUP

  onKeyUP or KeyDown
  {
    flip card *write logic*
    messageBox displays "Correct or incorrect?"
  }


  key listener y v x
  if right {
  score counter + 1
  the card is taken out of rotation (move to another array)
  the cardStatus div turns green! and statusBox reads correct!


  if wrong
  it stays in rotation (three css classes untested, right and wrong)
  the card is taken out of rotation (move to another array)
  the cardStatus div turns green! and statusBox reads correct!

delete thisIsObject[key];

correctCard
toLearn.pop("correctCard")
learned.push("correctCard");




  $(document).keypress(function(e) { //Y = 121
      if(e.which == 88 || e.which ==120) {
          alert('You pressed X!');
      }
  });

  5. User click right arrow to go to next card  

  right arrow indexCard = array + 1
  left arrow index card = array - 1

*SILVER*

  1. var userAddCard = input
     flashCards.push
     *add clear list option*

  2. Input field in quiz mode


*GOLD*



hippo:[]
giraffe:[]
crocodile:[]
gorilla:[]
chimpanzee:[]
cheetah:[]
baboon:[]
wildebeest:[]
crane:[]
warthog:[]
meercat:[]
monkey:[]
ostrich:[]
flamingo:[]
gazelle:[]

bronze
flip card
user can mark right or wrong x vs y
keeps score

update styling.
need index card

silver
1. view correct words without restarting
1. Flashy and jazzy
1. Quiz mode and review mode
1. user can input their own words

Gold
1. Can switch between translations
2. Keeps score after refresh
3. Leaderboard

Platinum
1. Can choose what goes on front vs back



// var toLearn = {
// lion:['狮子','lion','Shīzi'],
// zebra:['斑马','zebra','Bānmǎ'],
// elephant:['象','elephant','Xiàng'],
// hyena: ['鬣狗','hyena','Liègǒu'],
// rhino: ['犀牛','rhino','Xīniú']
// }


$(document).keydown(function(e) {
    if(e.which == 39) {
        alert('You pressed right  arrow!');
    }
});

$(document).keydown(function(e) {
    if(e.which == 37) {
        alert('You pressed left arrow!');
    }
});


$(document).keydown(function(e) {
    if(e.which == 40) {
        alert('You pressed down arrow!');
    }
});

$(document).keypress(function(e) { //Y = 121
    if(e.which == 88 || e.which ==120) {
        alert('You pressed X!');
    }
});

$(document).keypress(function(e) { //Y = 121
    if(e.which == 89 || e.which ==121) {
        alert('You pressed Y!');
    }
});


 MVP Minimum Viable Product

T&T(4m)

With what we've talked about, discuss with your neighbor what you think we mean by minimum viable product.
Honestly there's alot of different meanings for minimum viable product. I like this video alot

So what does MVP mean in this class? It's not so different. Build something that works(sorta), that you can get feedback from, and subsequently iterate on.

For the scope of this course. Think of a bronze, silver and gold model. Silver is really what you're trying to make. But if you fall short on time you have your bronze you can fall back on. If you don't have enough to do, you could go to your gold model. Your MVP should be on that bronze/silver line..... ish

User Stories, how do we figure out our MVP?

In order to work towards our MVP developers write user stories. User stories are essentially small granular features for your application.

User stories have:

role
goal
reason
As a <role> I should be able to <goal> so that <reason>

User stories should be granular and succinct.

good user story

As a user, I should be able to message other users so that I can communicate with my family
bad user story

This app should have a really good social networking engine.

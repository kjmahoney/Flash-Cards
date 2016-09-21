--READ ME v 1.0

INSTRUCTIONS:

Click Start to begin the flash cards

Up/Down arrows flip the cards

Left/Right arrows cycle through the cards

When on a card, use 'Y' to indicate that you have mastered the card. Once mastered, it will be removed from the deck. Press X to indicate that you are not familiar with a card and it will remain in the deck.

Once all cards are mastered, the session will end. Refresh to try again.

INSTALLATION:

This game is designed to run in your browser


TECHNOLOGIES USED:

This site was built using javascript and jQuery and styled in CSS.

METHODOLOGY:

This game is array based. Arrays are used to represent decks of cards. The quiz cards are pulled from the 'toLearn' array. When a card is mastered, the script moves the card to the 'learned' array. Future releases will allow the user to review cards in the 'learned' array. Additional script provides functionality to scroll through cards, a victory condition, and score-keeping.

PROBLEMS ENCOUNTERED:

There primary existing issue occurs once a user masters all cards in the deck. The user can no longer interact with the cards. The solution will be to include a reset button and an ability to review 'learned' cards.

The primary problem is the limitation of the card input, which limits the utility of this game. By creating an 'add card' button a user will be able to place cards in the deck one at a time. However, the long-term goal is to allow users to import large amounts of cards via csv file. This will also require local memory so that a user can leave a session and resume after refreshing their browser.


FUTURE RELEASES:

This is the base version of the game. Future goals include the following features:

1. Functionality for the user to add cards to the deck
2. Functionality for the score to be saved between sessions
3. Functionality for arrays to be imported via csv file
4. Images for pre-loaded cards
5. Install a quiz mode
6. Install a review mode
7. Include pinyin pronunciation
8. User can switch between English to Chinese and vice versa
9. Hide instructions in a drop menu for a cleaner presentation
10. Card animation
11. Reset button
12.


USER STORIES
1. As a user, I should be able to evaluate whether or not I know the translation of a character
2. As a user, I should be able to eliminate the cards that I have mastered in order to isolate those I'm not familiar with
3. As a user, I should be able to keep a score of the cards I've mastered in a session in order to track my progress
4. As a user, I should be able to navigate easily between cards, so I can come back to those I'm not familiar with
5. As a user, I should be able to add cards to the deck so that I can customize my quizzes
5. As a user, I should be able to bulk load cards so that I can conveniently input large decks of cards --Not Met
7. As a user, I should be able to save my score between sessions, so that I can quiz myself on large decks of cards --Met

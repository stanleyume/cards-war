## Cards War

*A basic implementation of the cards war game*

Two players are given one deck of cards each. The cards are shuffled and placed face down in front of the players.

Then the top card of each player's deck is flipped over and compared. The player with the highest card wins that round.
If both players flip the same card, the round is a tie and no point is awarded.

This is repeated with each subsequent card in the decks until both players run out of cards.

#### Usage
`war(A, B)`
Where A and B are strings representing the cards (from top to bottom) in each player's deck.

#### Example
`war('JT76Q548A', 'K76478A5Q')`

#### Deck Value

|Card|Symbol|Value|
|-|-|-|
|Ace|A|14|
|King|K|13|
|Queen|Q|12|
|Joker|J|11|
|Ten|T|10|
|Nine|9|9|
|Eight|8|8|
|Seven|7|7|
|Six|6|6|
|Five|5|5|
|Four|4|4|
|Three|3|3|
|Two|2|2|
|One|1|1|


#### Assumptions
Both players have the same number of cards.
A card may appear multiple times in each deck.
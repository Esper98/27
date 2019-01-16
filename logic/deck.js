
class Deck {
    
    constructor(){
        deck = []
    }

    drawCard() {
        var card = deck[Math.floor(Math.random() * deck.length)];
        return card
    }
    getCards(amount){
        //returns list of cards and remove
    }
    removeCard(){
        var index = cardList.indexOf(card);
        cardList.splice(index, 1);
    }
    createDeck(){
        //creates deck
    }
    shuffleDeck(){
        //shuffles deck
    }
}

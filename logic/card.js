
export const card = {
    returnRandomCardFromDeck: function(deck){
        var card = deck[Math.floor(Math.random() * deck.length)];
        return card
    },
    removeCard: function(card, cardList){
        var index = cardList.indexOf(card);
        cardList.splice(index, 1);
    },
    returnStartingHand: function(deck){
        const startingHand = []
        for (let index = 0; index < 6; index++) {
            startingHand[index] = this.returnRandomCardFromDeck(deck)
            this.removeCard(startingHand[index], deck)
        }
        return startingHand
    }
}
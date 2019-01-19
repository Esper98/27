
export const card = {
    returnRandomCardFromDeck: function(deck){
        return deck[0]
    },
    removeCard: function(card, cardList){
        cardList.splice(0, 1);
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
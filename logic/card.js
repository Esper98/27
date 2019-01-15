
returnRandomCardFromDeck = (deck) => {
    var card = deck[Math.floor(Math.random() * deck.length)];
    return card
}

removeCard = (card, cardList) =>{
    var index = cardList.indexOf(card);
    cardList.splice(index, 1);
}

export function returnStartingHand(deck){
    const startingHand = []
    for (let index = 0; index < 6; index++) {
        startingHand[index] = this.returnRandomCardFromDeck(deck)
        this.removeCard(startingHand[index], deck)
    }
    return startingHand
}
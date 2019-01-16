
export default class hand{

    constructor(){
        
        hand = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}]
        console.log('deckhand')
    }
    createStartingHand(){
        const startingHand = []
        for (let index = 0; index < 6; index++) {
            startingHand[index] = this.returnRandomCardFromDeck(deck)
            this.removeCard(startingHand[index], deck)
        }
        return startingHand
    }
    getHand(){
        return hand
    }
}

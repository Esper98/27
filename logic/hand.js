
export const hand = {

    drawCards: function(deck, amount){
        console.log(deck + ' '+ amount)
        const drawnCards = []
        for (let index = 0; index < amount; index++) {
            drawnCards[index] = deck[0]
            deck.splice(0, 1);
        }
        return drawnCards
    },

}
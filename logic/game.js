
export const game = {

    createDeck: function(){
        const deck = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]
        this.shuffleDeck(deck)
        return deck
    },

    shuffleDeck: function(deck){
        var j, x, i;
        for (i = deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = deck[i];
            deck[i] = deck[j];
            deck[j] = x;
        }
        return deck;
    }
}
import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, FlatList } from 'react-native';

export default class Hand extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            hand:[] 
        };
    }

    componentDidMount(){
        this.returnStartingHand()
    }

    renderCard (card){        
        return (
            <Card style={styles.cardContainer}
            value={card.value}/>
        );
    }

    returnRandomCardFromDeck(){
        var card = this.props.deck[Math.floor(Math.random() * this.props.deck.length)];
        return card
    }

    removeCard(card, cardList){
        var index = cardList.indexOf(card);
        cardList.splice(index, 1);
    }

    returnStartingHand(){
        const startingHand = []
        for (let index = 0; index < 6; index++) {
            startingHand[index] = this.returnRandomCardFromDeck()
            this.removeCard(startingHand[index], this.props.deck)
        }
        this.setState({
            hand: startingHand
        })  
    }
    render() {
        return (
            <FlatList style={styles.hand}
                horizontal
                data={this.state.hand}
                renderItem={({ item }) => this.renderCard(item)}
                keyExtractor={this._keyExtractor}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    hand: {
        position: 'absolute',
        bottom: 0,
        height: 120,
        width: '100%',
        backgroundColor: 'rgb(200,200,200)',
    }
});
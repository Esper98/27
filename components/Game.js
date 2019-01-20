
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { game } from "../logic/game";
//components
import Hand from './Hand'
import Deck from './Deck'
import Stock from './Stock'



export default class Game extends Component {
	constructor(props) {
		console.disableYellowBox = true
		super(props);
		this.state = {
			deck: game.createDeck(),	
		}
	}
	  
  	render() {
    	return (
      		<View style={styles.container}>
       			<View style={styles.cardContainer}>
                   <View style={styles.field}>
                        <Deck deck={this.state.deck}/>
                        <Stock/>
                    </View>
        		</View>
        		<Hand drawCards={(amount)=> this.drawCards(amount)}/>
      		</View>
    	);
	}
	
	drawCards(amount){
		const drawnCards = []
		var tempDeck = this.state.deck
		for (let index = 0; index < amount; index++) {
			drawnCards[index] = tempDeck[0]
			tempDeck.splice(0, 1);
		}
		this.setState({
			deck: tempDeck
		})
		return drawnCards
	}
}

const styles = StyleSheet.create({
    container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
    	backgroundColor: '#F5FCFF',
  	},
  	cardContainer: {
    	flexDirection: 'row',
    	justifyContent: 'center',
    	width: '100%',
    	alignItems: 'center',
  	},
    field: {
    	height: 120,
    	flexDirection: 'row',
    	width: '100%',
    	backgroundColor: 'rgb(200,200,200)',
  	},
});

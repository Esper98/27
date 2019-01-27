import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, View, Text } from 'react-native';

// Redux
import { createDeck, drawCards } from "../actions/deck";
import { connect } from 'react-redux';

class Deck extends Component {

	constructor(props) {
		super(props);
		this.props.dispatch(createDeck())
	//	this.props.dispatch(drawCards(2))
  	}

  	render() {
    	return (
        	
			<View style={styles.deck}>
				<Card value='3' isClosed={true}/>
				<Text style={styles.text}>Cards left: {this.props.deck.length}</Text>
			</View>            
        	
    	);
  	}
}
const mapStateToProps = state => ({
    deck: state.deck.deck,
})

export default connect(mapStateToProps, null)(Deck);

const styles = StyleSheet.create({
  	field: {
    	height: 120,
    	flexDirection: 'row',
    	width: '100%',
    	backgroundColor: 'rgb(200,200,200)',
  	},
  	stock: {
    	backgroundColor: 'rgb(100,0,200)', 
    	fontSize: 60,
    	flexDirection: 'row',
    	justifyContent:'center',
    	width: '50%',
  	},
  	deck: {
    	backgroundColor: 'rgb(200,0,100)', 
    	alignItems: 'center',
    	flex: 1,
    	width: '50%',
  	},
  	text: {
    	fontSize: 20,
  	}
});
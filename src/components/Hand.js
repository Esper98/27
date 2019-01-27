import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, FlatList, TouchableHighlight} from 'react-native';

//redux
import { createHand } from '../actions/hand';
import { drawCards } from '../actions/deck';
import { addToPlayingField } from '../actions/playingField';
import { connect } from 'react-redux';

class Hand extends Component {

  	constructor(props) {
		super(props);
		this.props.dispatch(createHand(drawCards(5)));
	  }

  	renderCard = (card) => {
      	return (
			<TouchableHighlight onPress={() => this.props.dispatch(addToPlayingField(card))}>
				<Card style={styles.cardContainer}
				value = {card}
				isClosed = {false}/>
			</TouchableHighlight>
        	
    	);
  	}

  	render() {
    	return (
        	<FlatList style={styles.hand}
            	horizontal
            	data={this.props.hand}
            	renderItem={({ item }) => this.renderCard(item)}
            	keyExtractor={this._keyExtractor}
            	showsHorizontalScrollIndicator={false}
            	contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
      		/>
    	);
  	}
}
const mapStateToProps = state => ({
	hand: state.hand.hand,
})

export default connect(mapStateToProps, null)(Hand);

const styles = StyleSheet.create({
  	hand: {
    	padding: 20,
    	width: '100%',
    	backgroundColor: 'rgb(200,200,200)',
  	}
});
import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, FlatList } from 'react-native';

//redux
import { connect } from 'react-redux';

class PlayingField extends Component {

  	constructor(props) {
		super(props);
		
	  }

  	renderCard = (card) => {
      	return (
        	<Card style={styles.cardContainer}
        	value = {card}
        	isClosed = {false}/>
    	);
  	}

  	render() {
    	return (
        	<FlatList style={styles.playingField}
            	horizontal
            	data={this.props.playingField}
            	renderItem={({ item }) => this.renderCard(item)}
            	keyExtractor={this._keyExtractor}
            	showsHorizontalScrollIndicator={false}
            	contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
      		/>
    	);
  	}
}
const mapStateToProps = state => ({
	playingField: state.playingField.playingField,
})

export default connect(mapStateToProps, null)(PlayingField);

const styles = StyleSheet.create({
  	playingField: {
    	padding: 20,
    	width: '100%',
    	backgroundColor: 'rgb(200,200,200)',
  	}
});
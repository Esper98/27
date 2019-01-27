
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//components
import Hand from './Hand'
import Deck from './Deck'
import Stock from './Stock'
import PlayingField from './PlayingField'


var cards = ["3", "X", "1", "3", "X", "3"]; 

export default class Game extends Component {
  	render() {
    	return (
      		<View style={styles.container}>
					<View style={styles.field}>
						<Deck/>
						<Stock/>
					</View>
				<View style={{flex: 1}}>
					<PlayingField/>
				</View>
				<View style={{flex: 1}}>
					<Hand/>
				</View>
				
      		</View>
    	);
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
		flex: 1,
    	flexDirection: 'row',
    	justifyContent: 'center',
    	width: '100%',
    	alignItems: 'center',
  	},
    field: {
    	flexDirection: 'row',
    	width: '100%',
    	backgroundColor: 'rgb(200,200,200)',
  	},
});

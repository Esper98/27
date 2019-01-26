
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//components
import Hand from './Hand'
import Deck from './Deck'
import Stock from './Stock'


var cards = ["3", "X", "1", "3", "X", "3"]; 

export default class Game extends Component {
  	render() {
    	return (
      		<View style={styles.container}>
       			<View style={styles.cardContainer}>
                   <View style={styles.field}>
                        <Deck/>
                        <Stock/>
                    </View>
        		</View>
        		<Hand/>
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

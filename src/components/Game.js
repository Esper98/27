
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//components
import Hand from './Hand'
import Deck from './Deck'
import Pile from './Pile'
import Opponent from './Opponent'

export default class Game extends Component {
  	render() {
    	return (
      		<View style={styles.container}>
			  	<Opponent/>
       			<View style={styles.cardContainer}>
                    <View style={styles.field}>
                        <Deck/>
                        <Pile/>
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
    //	justifyContent: 'center',
    	alignItems: 'center',
    //	backgroundColor: '#F5FCFF',
  	},
  	cardContainer: {
    	flexDirection: 'row',
    	justifyContent: 'center',
    	width: '100%',
		alignItems: 'center',
		margin: 40,
  	},
    field: {
    	height: 120,
    	flexDirection: 'row',
    	width: '100%',
    	backgroundColor: 'rgb(200,200,200)',
  	},
});

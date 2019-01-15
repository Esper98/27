/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//components
import Card from './components/Card'
import Hand from './components/Hand'
import Deck from './components/Deck'

const instructions = Platform.select({
  	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  	android:
    	'Double tap R on your keyboard to reload,\n' +
    	'Shake or press menu button for dev menu',
});

var deck = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}]; 

export default class App extends Component {
  	render() {
    	return (
      		<View style={styles.container}>
       			<View style={styles.cardContainer}>
					<Deck/>
        		</View>
        		<Hand deck={deck}/>
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
  	welcome: {
    	fontSize: 20,
    	textAlign: 'center',
    	margin: 10,
  	},
  	instructions: {
    	textAlign: 'center',
    	color: '#333333',
    	marginBottom: 5,
  	},
});

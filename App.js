/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';

//components
import Game from './components/Game'

export default class App extends Component {
  	render() {
    	return (
			<Game/>
    	);
  	}
}

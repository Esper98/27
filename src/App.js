/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
//components
import Game from './components/Game'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Game/>
			</Provider>
		);
	}
}

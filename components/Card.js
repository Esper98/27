import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Card extends Component {

	constructor(props) {
    	super(props);
  	}

  	render() {
    	var test;
    	if (!this.props.isClosed) {
      		test = <Text style={styles.text}>{ this.props.value }</Text>;
    	} else {
      		test = null;
    	}

    	return (
      		<View style= {[styles.card, this.props.isClosed ? styles.closed: styles.open]}>
        		{test}
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
  text: {
    	fontSize: 30,
    	height: 80,
    	width: 50,
    	textAlign: 'center',
    	lineHeight: 80,
  	},
  	card: {
    	borderRadius: 6,
    	height: 80,
    	width: 50,
    	shadowColor: "#000",
    	shadowOffset: {
      	width: 0,
      	height: 1,
    },
    	shadowOpacity: 0.22,
    	shadowRadius: 2.22,
    	elevation: 3,
  	},
  	open: {
    	backgroundColor: 'rgb(0,200,200)',
  	},
  	closed: {
    	backgroundColor: 'rgb(0,50,50)',
  	}
});
import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, View, Text } from 'react-native';

export default class Stock extends Component {

	constructor(props) {
    	super(props);
  	}

  	render() {
    	return (
        	
            <View style={styles.stock}>
                <Card value='2' isClosed={false}/>
            </View>
            
    	);
  	}
}

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
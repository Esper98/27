import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, View, Text } from 'react-native';

//redux
import { connect } from 'react-redux';
import { addToPile } from '../actions/pile';

class Pile extends Component {

	constructor(props) {
		super(props);
		this.props.dispatch(addToPile(['y','x','o']));
  	}

  	render() {
    	return (
            <View style={styles.stock}>
                <Card value={this.props.topCard} isClosed={false}/>
            </View>           
    	);
  	}
}

const mapStateToProps = state => ({
	pile: state.pile.pile,
	topCard: state.pile.topCard
})

export default connect(mapStateToProps, null)(Pile);

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
import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, View, Text } from 'react-native';

//redux
import { connect } from 'react-redux';

class Opponent extends Component {

  	constructor(props) {
		super(props);
	//	this.props.dispatch(createHand(drawCards(3)));
	  }

  	render() {
    	return (
            <View style={styles.hand}>
				<Card value='3' isClosed={true}/>
                <Card value='3' isClosed={true}/>
				<Card value='3' isClosed={true}/>
				<Card value='3' isClosed={true}/>
				<Card value='3' isClosed={true}/>
                <Card value='3' isClosed={true}/>
            </View>
    	);
  	}
}
const mapStateToProps = state => ({
	// hand: state.hand.hand,
})

export default connect(mapStateToProps, null)(Opponent);

const styles = StyleSheet.create({
  	hand: {
    	padding: 20,
    	top: 0,
    	height: 120,
    	width: '100%',
        backgroundColor: 'rgb(200,200,200)',
    	flexDirection: 'row',
    	justifyContent: 'space-between',
  	}
});
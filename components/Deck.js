import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, View } from 'react-native';

export default class Deck extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.deck}>
            <Card value='2' isClosed={true}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    height: 200,
    width: 200,
    margin: 30,
    backgroundColor: 'rgb(100,100,100)',
  }
});
import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, View, Text } from 'react-native';

export default class Deck extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.deck}>
        <Card value = '1'/>
        <Card value = '+'/>
        <Card value = 'x'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    position: 'absolute',
    bottom: 0,
    height: 120,
    width: '100%',
    backgroundColor: 'rgb(200,200,200)',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  }
});
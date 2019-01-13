import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>X</Text>
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
    margin: 10,
    borderRadius: 6,
    height: 80,
    width: 50,
    backgroundColor: 'rgb(0,200,200)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
});
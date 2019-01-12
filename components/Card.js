import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>oi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});
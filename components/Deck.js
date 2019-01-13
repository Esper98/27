import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, View, FlatList } from 'react-native';

export default class Deck extends Component {

  constructor(props) {
    super(props);
  }

  renderItem = (item) => {
    return (
        <Card style={styles.cardContainer}
        value = '10'/>
    );
  }

  render() {
    return (
        <FlatList style={styles.deck}
            horizontal
            data={this.props.cards}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={this._keyExtractor}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      />
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
  }
});
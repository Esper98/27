import React, { Component } from 'react';
import Card from './Card';
import { StyleSheet, FlatList } from 'react-native';

export default class Hand extends Component {

  constructor(props) {
    super(props);
  }

  renderCard = (card) => {
      return (
        <Card style={styles.cardContainer}
        value = {card}/>
    );
  }

  render() {
    return (
        <FlatList style={styles.hand}
            horizontal
            data={this.props.cards}
            renderItem={({ item }) => this.renderCard(item)}
            keyExtractor={this._keyExtractor}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  hand: {
    position: 'absolute',
    bottom: 0,
    height: 120,
    width: '100%',
    backgroundColor: 'rgb(200,200,200)',
  }
});
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.textStyle}>FlatCards1234</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 28,
    paddingHorizontal: 8,
  },
  container: {
    // backgroundColor: 'lightpink',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  cards: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
    borderRadius: 15,
  },
  cardTwo: {
    backgroundColor: 'blue',
    borderRadius: 15,
  },
  cardThree: {
    backgroundColor: 'green',
    borderRadius: 15,
  },
});

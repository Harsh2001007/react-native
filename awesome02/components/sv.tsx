import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function Sview() {
  return (
    <ScrollView horizontal={true} style={styles.mainBox}>
      {/* <Text style={styles.textSize}>scroll view</Text> */}
      <View style={styles.boxes}>
        <Text>box one</Text>
      </View>
      <View style={styles.boxes}>
        <Text>box 1</Text>
      </View>
      <View style={styles.boxes}>
        <Text>box 1</Text>
      </View>
      <View style={styles.boxes}>
        <Text>box 1</Text>
      </View>
      <View style={styles.boxes}>
        <Text>box 1</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 28,
    padding: 8,
  },
  mainBox: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  boxes: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
    borderRadius: 8,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

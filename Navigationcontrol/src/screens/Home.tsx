import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

// imports

import {RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type safety

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>; //this can be ignored as this is typescript

export default function Home({navigation}: Homeprops) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go to Detail screen"
        onPress={() =>
          navigation.navigate('Details', {productId: 'i am the param'})
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});

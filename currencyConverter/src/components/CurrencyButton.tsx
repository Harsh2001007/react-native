import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    color: 'white',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    color: 'white',
    marginBottom: 4,
  },
});
export default CurrencyButton;

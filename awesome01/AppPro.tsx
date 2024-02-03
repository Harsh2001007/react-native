import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {/* <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello world !
      </Text>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello world !
      </Text>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello world !
      </Text> */}
      <Text style={styles.defaultTextColor}>Hello world !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    color: 'purple',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 36,
    width: 50,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  blackText: {
    color: '#000000',
  },
  defaultTextColor: {
    color: 'black',
  },
});

export default AppPro;

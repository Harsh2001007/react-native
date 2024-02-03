import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function App(): JSX.Element {
  const [randomBgc, setRandomBgc] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBgc(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBgc} />
      <View style={[styles.container, {backgroundColor: randomBgc}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me !</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    backgroundColor: '#6A1B4D',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  actionBtnText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

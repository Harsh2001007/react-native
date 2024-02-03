import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Cards from './components/FlatCards';
import FlatCards from './components/FlatCards';
import Sview from './components/sv';
import ImageCard from './components/imageCard';
import OpacityCard from './components/opacityCard';
import ContactList from './components/contactList';

function App() {
  return (
    // <ScrollView>
    //   <View>
    //     <Text>App one</Text>
    //   </View>
    //   <FlatCards />
    //   <Sview />
    //   <ImageCard />
    //   <OpacityCard />
    // </ScrollView>
    <View>
      <Text>hello world</Text>
      <ScrollView>
        <FlatCards />
        <Sview />
        <ImageCard />
        <OpacityCard />
        <ContactList />
        <View style={styles.bottomSpacing}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSpacing: {
    height: 40,
  },
});
export default App;

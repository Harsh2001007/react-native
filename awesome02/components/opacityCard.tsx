import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import React from 'react';

export default function OpacityCard() {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl);
  }
  return (
    <View>
      <Text style={styles.headingText}>opacityCard</Text>
      <View style={styles.cardBody}>
        <Image
          source={{
            uri: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/07/11/jujutsu-kaisen-season-2-op.jpeg',
          }}
          style={styles.cardImageStyle}
        />
        <View style={styles.buttonBody}>
          <TouchableOpacity
            onPress={() => openWebsite('https://aniwatch.to/home')}>
            <Text style={styles.button1}>redirect me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
            <Text style={styles.button2}>follow us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    marginHorizontal: 12,
    fontSize: 24,
  },
  cardBody: {
    height: 250,
    backgroundColor: 'white',
    marginTop: 8,
    width: 370,
    marginHorizontal: 20,
  },
  cardImageStyle: {
    height: 200,
  },
  buttonOne: {
    color: 'black',
    fontSize: 20,
  },
  buttonBody: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
  },
  button1: {
    color: 'white',
    backgroundColor: 'black',
    paddingRight: 5,
    paddingLeft: 10,
    paddingBottom: 6,
    paddingTop: 5,
    borderRadius: 8,
    fontSize: 16,
    width: 100,
  },

  button2: {
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 8,
    fontSize: 16,
    width: 100,
    paddingRight: 5,
    paddingLeft: 10,
    paddingBottom: 6,
    paddingTop: 5,
  },
});

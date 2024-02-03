import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.headingText}>Image Card</Text>
      <View style={[styles.cardBody, styles.Elevation]}>
        <Image
          source={{
            uri: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/07/11/jujutsu-kaisen-season-2-op.jpeg',
          }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.cardTitle}>Geto and Gojo</Text>
          <Text style={styles.cardLabel}>Grade 1 Sorcerers</Text>
          <Text style={styles.cardDescription}>
            "Both works for humanity and fights against the cursed spirits. But
            Geto was killed due his false beliefs.Geto's body is now being
            stolen by kenjaku. Kenajku now wants to prison Gojo. Gojo is the
            current holder of the six eyes."
          </Text>
          <Text style={styles.cardEnding}>
            season 2 now ends with entry of yuta Okkotsu
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    marginLeft: 8,
    marginTop: 8,
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    height: 400,
    width: 370,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 8,
  },
  Elevation: {
    elevation: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  cardTitle: {
    color: 'black',
    fontSize: 24,
    marginTop: 4,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  cardLabel: {
    color: '#8395A7',
    fontSize: 16,
    marginLeft: 5,
  },
  cardDescription: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
    marginTop: 5,
  },
  cardEnding: {
    color: '#D63031',
    fontSize: 16,
    marginLeft: 5,
  },
});

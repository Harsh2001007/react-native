import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'harsh sachan',
      job: 'SDET',
      description: 'test web and app',
      imageUrl:
        'https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2016/10/tumblr_ljrzw8nmrg1qdkdwfo1_500.png?resize=480%2C356&ssl=1˛',
    },
    {
      uid: '2',
      name: 'rishab pandey',
      job: 'network engineer',
      description: 'code to handle the network',
      imageUrl:
        'https://i.pinimg.com/736x/64/22/7a/64227a39771f30b59170d9587ed01e80.jpg',
    },
    {
      uid: '3',
      name: 'sandeep singh',
      job: 'backend dev',
      description: 'works on springboot for backend',
      imageUrl:
        'https://static.wikia.nocookie.net/dragonballfanon/images/0/0e/Gohan_%28Xz%29.jpg/revision/latest?cb=20130827140352',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact Card</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, job, description, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <Text style={styles.name}>Name : {name}</Text>
            <Text style={styles.job}>Job : {job}</Text>
            <Text style={styles.desc}>What he do : {description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    marginHorizontal: 12,
    fontSize: 24,
  },
  container: {
    borderWidth: 2,
    width: 350,
    marginHorizontal: 34,
  },
  userCard: {
    borderWidth: 2,
    borderColor: 'red',
    marginVertical: 4,
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  job: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  desc: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
});

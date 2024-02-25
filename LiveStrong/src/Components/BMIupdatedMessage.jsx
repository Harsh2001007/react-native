import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function BMIupdatedMessage() {
  return (
    <View style={styles.bmiUpdateMessage}>
      <Text style={{color: 'black', fontWeight: '700', letterSpacing: 1}}>
        New BMI updated to your profile ✅
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bmiUpdateMessage: {
    height: hp(5),
    width: wp(70),
    marginTop: hp(1),
  },
});

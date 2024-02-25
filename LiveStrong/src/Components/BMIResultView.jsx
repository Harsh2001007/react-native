import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BMIupdatedMessage from './BMIupdatedMessage';

export default function BMIResultView({bmiValue, bmiType, resetMethod}) {
  const [isVisibleBmiUpdate, setIsVisibleBmiUpdate] = useState(false);

  const hideAndreset = () => {};
  return (
    <>
      <View style={styles.resultView}>
        <Text
          style={{
            color: 'black',
            fontSize: hp(2),
            fontWeight: '700',
            marginTop: hp(2),
            paddingHorizontal: wp(4),
          }}>
          Your BMI is {bmiValue}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: hp(2),
            fontWeight: '700',
            marginTop: hp(1),
            paddingHorizontal: wp(4),
          }}>
          You are a {bmiType} person.
        </Text>
        <View style={styles.bmiValueCard}>
          <TouchableOpacity
            style={styles.updateBmiBtn}
            onPress={() => setIsVisibleBmiUpdate(true)}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              Update BMI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn} onPress={resetMethod}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isVisibleBmiUpdate && <BMIupdatedMessage />}
    </>
  );
}

const styles = StyleSheet.create({
  resultView: {
    height: hp(18),
    width: wp(70),
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderColor: '#F875AA',
    marginTop: hp(2),
    borderRadius: 6,
  },
  bmiValueCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  updateBmiBtn: {
    backgroundColor: '#E5D4FF',
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
    borderRadius: 6,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    marginVertical: hp(3),
  },
  resetBtn: {
    backgroundColor: '#FFBE98',
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
    borderRadius: 6,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    marginVertical: hp(3),
  },
});

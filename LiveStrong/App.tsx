import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function App() {
  const [bmiValue, setBmiValue] = useState('');
  const [height, setheight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiType, setBmiType] = useState('none');

  const calculateSum = () => {
    const num1 = parseInt(height);
    const num2 = parseInt(weight);
    const result = num1 + num2;
    setBmiValue(result.toString());
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="black"
        translucent={true}
        networkActivityIndicatorVisible={false}
      />
      <View style={styles.mainContainer}>
        <Text
          style={{
            marginTop: hp(5),
            color: 'black',
            fontWeight: '800',
            fontSize: hp(2),
          }}>
          BMI Calculator
        </Text>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.textInput1}
            placeholder="Enter your Height(in cm)"
            keyboardType="numeric"
            value={height}
            onChangeText={text => setheight(text)}
          />
          <TextInput
            style={styles.textInput2}
            placeholder="Enter your weight(in kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={text => setWeight(text)}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={calculateSum}>
            <Text
              style={{
                color: 'white',
                paddingVertical: hp(1),
                fontWeight: '800',
                letterSpacing: 2,
              }}>
              Calculate
            </Text>
          </TouchableOpacity>
          <View style={styles.resultView}>
            <Text
              style={{
                color: 'black',
                fontSize: hp(2),
                fontWeight: '700',
                marginTop: hp(2),
                paddingHorizontal: wp(4),
              }}>
              Your BMI is {bmiValue}.
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
              <TouchableOpacity style={styles.updateBmiBtn}>
                <Text
                  style={{color: 'black', fontWeight: '600', letterSpacing: 1}}>
                  Update BMI
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.resetBtn}
                onPress={() => {
                  setheight('');
                  setWeight('');
                  setBmiValue('');
                }}>
                <Text
                  style={{color: 'black', fontWeight: '600', letterSpacing: 1}}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#EEEDEB',
    height: hp(100),
    alignItems: 'center',
  },
  innerContainer: {
    borderColor: 'red',
    borderWidth: 1,
    width: wp(85),
    flex: 1,
    alignItems: 'center',
  },
  textInput1: {
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
    borderRightWidth: 7,
    borderRadius: 6,
    width: wp(70),
    paddingHorizontal: hp(1),
  },
  textInput2: {
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
    borderRightWidth: 7,
    borderRadius: 6,
    width: wp(70),
    marginTop: hp(5),
    paddingHorizontal: hp(1),
  },
  submitBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
    width: wp(40),
    borderRadius: 6,
    backgroundColor: '#80BCBD',
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: 'grey',
  },
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

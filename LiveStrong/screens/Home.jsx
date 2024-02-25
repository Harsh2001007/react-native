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
import BMIResultView from '../src/Components/BMIResultView';
import BMIupdatedMessage from '../src/Components/BMIupdatedMessage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {create} from 'react-test-renderer';
import MaintenaceCalaorie from './MaintenaceCalaorie';
import {useNavigation} from '@react-navigation/native';

//  imports end here
export default function Home({navigation}) {
  const [bmiValue, setBmiValue] = useState('');
  const [height, setheight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiType, setBmiType] = useState('none');
  const [isVisibleBmiResult, setIsVisibleBmiResult] = useState(false);
  const calculateBmi = () => {
    const num1 = parseInt(height);
    const num2 = parseInt(weight);
    const heightTom = num1 / 100;
    const result = num2 / heightTom ** 2;
    console.log(result);
    setBmiValue(result.toFixed(1).toString());
    setIsVisibleBmiResult(true);

    switch (true) {
      case result < 18.5:
        setBmiType('underweight');
        break;

      case result > 18.5 && result < 25:
        setBmiType('Normal');
        break;

      case result > 25 && result < 30:
        setBmiType('Overweight');
        break;

      case result > 30 && result < 40:
        setBmiType('Obesity');
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setIsVisibleBmiResult(false);
    setheight('');
    setWeight('');
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
          <View>
            <TouchableOpacity style={styles.submitBtn} onPress={calculateBmi}>
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
          </View>
          {isVisibleBmiResult && (
            <BMIResultView
              bmiType={bmiType}
              bmiValue={bmiValue}
              resetMethod={reset}
            />
          )}
          <View style={styles.otherScreenContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Maintenance-calorie')}>
              <View style={styles.parentOne}>
                <Text style={styles.childText}>
                  Maintenance Calories Calculator
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.parentTwo}>
                <Text style={styles.childText}>Workout Planner</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.parentThree}>
                <Text style={styles.childText}>Diet Planner</Text>
              </View>
            </TouchableOpacity>
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
  otherScreenContainer: {
    marginTop: hp(2),
  },
  parentOne: {
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: hp(1),
    width: wp(80),
    height: hp(7),
    borderRadius: 6,
    borderBottomWidth: 7,
    borderRightWidth: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5EBAA',
  },
  parentTwo: {
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: hp(1),
    width: wp(80),
    height: hp(7),
    borderRadius: 6,
    borderBottomWidth: 7,
    borderRightWidth: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBE98',
  },
  parentThree: {
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: hp(1),
    width: wp(80),
    height: hp(7),
    borderRadius: 6,
    borderBottomWidth: 7,
    borderRightWidth: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5D4FF',
  },
  childText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

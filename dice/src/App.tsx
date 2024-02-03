import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {PropsWithChildren} from 'react';
import DiceOne from '../assets/one.png';
import DiceTwo from '../assets/two.png';
import DiceThree from '../assets/three.png';
import DiceFour from '../assets/four.png';
import DiceFive from '../assets/five.png';
import DiceSix from '../assets/six.png';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProp = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProp): JSX.Element => {
  return <Image style={styles.diceImage} source={imageUrl} />;
};

export default function App(): JSX.Element {
  const [shownDiceImage, setShownDiceImage] =
    useState<ImageSourcePropType>(DiceOne);
  const [bgColorNum, setBgColorNum] = useState('white');

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber === 1 || randomNumber == 2 || randomNumber == 3) {
      setBgColorNum('green');
    }
    if (randomNumber == 4 || randomNumber == 5 || randomNumber == 6) {
      setBgColorNum('pink');
    }

    switch (randomNumber) {
      case 1:
        setShownDiceImage(DiceOne);
        break;

      case 2:
        setShownDiceImage(DiceTwo);
        break;

      case 3:
        setShownDiceImage(DiceThree);
        break;
      case 4:
        setShownDiceImage(DiceFour);
        break;

      case 5:
        setShownDiceImage(DiceFive);
        break;

      case 6:
        setShownDiceImage(DiceSix);
        break;

      default:
        setShownDiceImage(DiceOne);
        break;
    }
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };

    // Trigger haptic feedback
    RNReactNativeHapticFeedback.trigger('impactHeavy', options);
  };
  return (
    <View
      style={{
        backgroundColor: bgColorNum,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
      }}>
      <Dice imageUrl={shownDiceImage} />
      <Dice imageUrl={shownDiceImage} />
      <TouchableOpacity onPress={rollDiceOnTap}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Click to Roll !!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    gap: 20,
  },
  actionBtn: {
    marginTop: 30,
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: '#6A1D4F',
    borderRadius: 20,
  },
  actionBtnTxt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

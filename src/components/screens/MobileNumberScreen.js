import React from 'react';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import CustomMobileNumber from '../common/CustomMobileNumber';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import styles from '../../styles/sharedStylesheet';

function MobileNumberScreen({
  onPressBack,
  setCountryCode,
  countryCode,
  number,
  setNumber,
  onNext,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={onPressBack}
        style={{
          width: 22,
        }}>
        <Image
          style={styles.backArrowImage}
          source={require('../../images/BackArrow.png')}
        />
      </Pressable>
      <TitleDescriptionComponent title={'Please enter your mobile number!'} />
      <View
        style={{
          marginTop: 35,
        }}>
        <CustomMobileNumber
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          number={number}
          setNumber={setNumber}
        />
      </View>
      <View
        style={{
          marginTop: 85,
        }}>
        <CustomButton title={'Next'} onPress={onNext} />
      </View>
    </SafeAreaView>
  );
}

export default MobileNumberScreen;

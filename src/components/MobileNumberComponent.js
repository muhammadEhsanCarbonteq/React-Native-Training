import React from 'react';
import { Pressable, SafeAreaView, View} from 'react-native';
import CustomButton from './common/CustomButton';
import CustomMobileNumber from './common/CustomMobileNumber';
import TitleDescriptionComponent from './common/TitleDescriptionComponent';
import styles from './common/sharedStylesheet';
import BackArrow from '../../images/BackArrow.svg'



function MobileNumberComponent({
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
        <BackArrow
          style={styles.backArrowImage}
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

export default MobileNumberComponent;

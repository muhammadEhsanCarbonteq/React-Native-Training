import React, {useState} from 'react';
import {View} from 'react-native';
import CustomCountryList from './CustomCountryList';

function CustomMobileNumber({countryCode, setCountryCode, number, setNumber}) {
  return (
    <View
      style={{
        width: '100%',
        height: 114,
        borderRadius: 15,
        borderColor: '#E8E6EA',
        borderWidth: 2,
      }}>
      <CustomCountryList
        setCountryCode={setCountryCode}
        countryCode={countryCode}
        number={number}
        setNumber={setNumber}
      />
    </View>
  );
}

export default CustomMobileNumber;

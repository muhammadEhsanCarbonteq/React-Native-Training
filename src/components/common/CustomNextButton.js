import React from 'react';
import {Image, View} from 'react-native';

function CustomNextButton() {
  return (
    <View
      style={{
        height: '35%',
        width: '15%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E1E8E8',
      }}>
      <Image
        style={{width: 6, height: 10}}
        source={require('../../images/Path.png')}
      />
    </View>
  );
}

export default CustomNextButton;

import React from 'react';
import { View} from 'react-native';
import PathSvg from '../../images/Path.svg';

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
      <PathSvg
        style={{width: 6, height: 10}}
      />
    </View>
  );
}

export default CustomNextButton;

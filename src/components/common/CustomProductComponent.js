import React from 'react';
import {Text, View} from 'react-native';

function CustomProductComponent({
  Eimage = '../../images/EventScreen.svg',
  title,
}) {
  return (
    <View
      style={{
        width: '100%',
        height: 275,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 30,
      }}>
      <Eimage  />
      <Text
        style={{
          fontSize: 18,
          color: 'black',
        }}>
        {title}
      </Text>
    </View>
  );
}

export default CustomProductComponent;

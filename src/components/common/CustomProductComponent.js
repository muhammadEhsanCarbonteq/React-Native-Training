import React from 'react';
import {Image, Text, View} from 'react-native';

function CustomProductComponent({
  image = '../../images/EventScreen.png',
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
      <Image source={image} />
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

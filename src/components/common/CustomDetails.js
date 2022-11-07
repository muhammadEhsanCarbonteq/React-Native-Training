import React from 'react';
import {Text, View} from 'react-native';

export default function CustomDetails({
  title = 'Last Name',
  value = 'Ehsan',
  key,
}) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 17,
        width: '100%',
        // flex: 1,
      }}
      key={key}>
      <Text
        style={{
          color: '#B3BBD4',
          fontSize: 14,
          marginBottom: 9,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: 'black',
        }}>
        {value}
      </Text>
    </View>
  );
}

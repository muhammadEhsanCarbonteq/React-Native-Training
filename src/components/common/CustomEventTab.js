import React from 'react';
import { Pressable, Text, View} from 'react-native';
import icon from '../../images/facebook.svg';

function CustomEventTab({
  Eimage = icon,
  heading = 'Facebook',
  By = 'By Facebook',
  description = 'At 3891 Ranchview Dr. Richardson, California',
  bgColor = '#ffffff',
  onSelect,
  name = 'Facebook',
  id,
}) {
  return (
    <Pressable
      style={{
        height: 88,
        backgroundColor: `${bgColor}`,
        borderColor: `${bgColor}`,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
        width: '100%',
      }}
      key={id}
      onPress={() => onSelect(name)}>
      <View
        style={{
          width: 67,
          height: 67,
          borderRadius: 22,
        }}>
        <Eimage
          style={{
            height: '75%',
            width: '75%',
            marginLeft: 15,
            marginTop: 7,
          }}
        />
      </View>
      <View
        style={{
          marginLeft: '4%',
          width: '75%',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: `${bgColor !== '#ffffff' ? 'white' : 'black'}`,
          }}>
          {heading}
        </Text>
        <Text
          style={{
            color: `${bgColor !== '#ffffff' ? 'white' : '#B3BBD4'}`,
          }}>
          {By}
        </Text>
        <Text
          style={{
            color: `${bgColor !== '#ffffff' ? 'white' : '#B3BBD4'}`,
          }}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
}

export default CustomEventTab;

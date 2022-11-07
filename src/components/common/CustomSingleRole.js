import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import CustomNextButton from './CustomNextButton';

function CustomSingleRole({
  image = require('../../images/AdminClinic.png'),
  name = 'ADMIN/CLINICAL',
  id,
  onSelectRole,
}) {
  return (
    <Pressable
      key={id}
      style={{
        height: '25%',
        borderRadius: 30,
        borderColor: 'rgba(225, 232, 232, 0.14)',
        borderWidth: 1,
        width: '100%',
        padding: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        marginVertical: 10,
      }}
      onPress={() => onSelectRole(id)}>
      <Image
        source={image}
        style={{
          height: '100%',
          width: '40%',
          borderRadius: 30,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: 'black',
        }}>
        {name}
      </Text>
      <CustomNextButton />
    </Pressable>
  );
}

export default CustomSingleRole;

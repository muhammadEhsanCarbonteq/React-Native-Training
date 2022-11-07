import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/sharedStylesheet';

function InputField({
  name = 'Email',
  secureTextEntry,
  showPassword,
  setShowPassword,
  ...restProps
}) {
  return (
    <View>
      {secureTextEntry ? (
        <>
          <View style={styles.inputFieldContainer}>
            <Text
              style={{
                color: '#B3BBD4',
              }}>
              {name}
            </Text>
          </View>
          <TextInput
            style={styles.inputField}
            secureTextEntry={showPassword}
            {...restProps}
          />
          <TouchableOpacity
            onPress={setShowPassword}
            style={{position: 'absolute', right: 15, top: 25}}>
            <Image source={require('../../images/eye.png')} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.inputFieldContainer}>
            <Text
              style={{
                color: '#B3BBD4',
              }}>
              {name}
            </Text>
          </View>
          <TextInput style={styles.inputField} {...restProps} />
        </>
      )}
    </View>
  );
}

export default InputField;

import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import InputField from '../common/InputField';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import styles from '../../styles/sharedStylesheet';

function LoginScreen({
  show,
  setShowPassword,
  text,
  onChangeText,
  passwordText,
  onChangePasswordText,
  onSignIn,
  onForgotPassword,
  onSignUp,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <TitleDescriptionComponent
        title={'Welcome'}
        description={'Enter your credentials to continue.'}
      />
      <View
        style={{
          marginTop: 35,
        }}>
        <View
          style={{
            marginBottom: 15,
          }}>
          <InputField
            value={text}
            onChangeText={onChangeText}
            setShowPassword={setShowPassword}
            name="Email"
          />
        </View>
        <InputField
          secureTextEntry
          value={passwordText}
          onChangeText={onChangePasswordText}
          setShowPassword={setShowPassword}
          showPassword={show}
          name="Password"
          blurOnSubmit
        />
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginTop: 8,
            color: '#B3BBD4',
          }}
          onPress={onForgotPassword}>
          <Text>forgot your password</Text>
        </TouchableOpacity>
        <CustomButton title={'Sign In'} onPress={onSignIn} />
        <View
          style={{
            marginTop: 18,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Don't Have a Account?
            {/* <TouchableOpacity
              style={{
                paddingTop: 10,
                marginLeft: 10,
              }}> */}
            <Text onPress={onSignUp} style={{color: '#3B68FF'}}>
              {' '}
              Sign up
            </Text>
            {/* </TouchableOpacity> */}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

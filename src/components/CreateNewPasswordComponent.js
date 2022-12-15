import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import CustomButton from './common/CustomButton';
import InputField from './common/InputField';
import TitleDescriptionComponent from './common/TitleDescriptionComponent';
import styles from './common/sharedStylesheet';
import BackArrow from '../../images/BackArrow.svg'

function CreateNewPasswordComponent({
  showConfirmPassword,
  showPassword,
  confirmPassword,
  onChangeconfirmPassword,
  password,
  onChangePassword,
  onChangeShowPassword,
  onChangeShowConfirmPassword,
  onSignUp,
  onPressBack,
  data,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={onPressBack}
        style={{
          width: 22,
        }}>
        <BackArrow
          style={styles.backArrowImage}
        />
      </Pressable>
      <TitleDescriptionComponent
        title={'Create New Password!'}
        description={`Enter your ${
          data == 'CreatePassword' ? 'password to Sign up' : 'new password'
        }.`}
      />
      <View
        style={{
          marginTop: 35,
        }}>
        <InputField
          secureTextEntry
          value={password}
          onChangeText={onChangePassword}
          setShowPassword={onChangeShowPassword}
          showPassword={showPassword}
          name="Password"
          blurOnSubmit
        />
      </View>
      <View
        style={{
          marginTop: 25,
        }}>
        <InputField
          secureTextEntry
          value={confirmPassword}
          onChangeText={onChangeconfirmPassword}
          setShowPassword={onChangeShowConfirmPassword}
          showPassword={showConfirmPassword}
          name="Confirm Password"
          blurOnSubmit
        />
      </View>
      <View
        style={{
          marginTop: 25,
        }}>
        <CustomButton
          title={data == 'CreatePassword' ? 'Sign Up' : 'Change Passowrd'}
          onPress={onSignUp}
        />
      </View>
    </SafeAreaView>
  );
}

export default CreateNewPasswordComponent;

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import InputField from '../common/InputField';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import styles from '../../styles/sharedStylesheet';

function SignUpScreen({email, setEmail, onCreateNewPassword, onSignInPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <TitleDescriptionComponent
        title={'Sign Up!'}
        description={'Enter your email to continue.'}
      />
      <View
        style={{
          marginTop: 45,
          marginBottom: 16,
        }}>
        <InputField value={email} onChangeText={setEmail} name="Email" />
      </View>

      <CustomButton
        title={'Creat New Password'}
        onPress={onCreateNewPassword}
      />
      <View
        style={{
          marginTop: 30,
          alignItems: 'center',
        }}>
        <Text>
          Already Have an Account?{' '}
          <Text onPress={onSignInPress} style={{color: '#3B68FF'}}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SignUpScreen;

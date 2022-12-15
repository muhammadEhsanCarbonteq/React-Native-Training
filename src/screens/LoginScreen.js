import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';

function LoginScreen({ navigation, authentication }) {
  const [show, setShow] = useState(true);
  const [text, onChangeText] = useState('mail@gmail.com');
  const [passwordText, onChangePasswordText] = useState('password');
  const setShowPassword = () => {
    setShow(!show);
  };

  const onSignIn = () => {
    authentication(true)
    navigation.navigate('Number', { name: 'Number' });
  };
  const onForgotPassword = () => {
    navigation.navigate('ChangePassword', { name: 'ChangePassword' });
  };

  const onSignUp = () => {
    navigation.navigate('Signup', { name: 'Signup' });
  };

  return (
    <LoginComponent
      show={show}
      setShowPassword={setShowPassword}
      text={text}
      onChangeText={onChangeText}
      passwordText={passwordText}
      onChangePasswordText={onChangePasswordText}
      onSignIn={onSignIn}
      onForgotPassword={onForgotPassword}
      onSignUp={onSignUp}
    />
  );
}

export default LoginScreen;

import React, {useEffect, useState} from 'react';
import LoginScreen from '../components/screens/LoginScreen';

function LoginScreenContainer({navigation}) {
  const [show, setShow] = useState(true);
  const [text, onChangeText] = useState('mail@gmail.com');
  const [passwordText, onChangePasswordText] = useState('password');
  const setShowPassword = () => {
    setShow(!show);
  };

  const onSignIn = () => {
    navigation.navigate('Number', {name: 'Number'});
  };
  const onForgotPassword = () => {
    navigation.navigate('ChangePassword', {name: 'ChangePassword'});
  };

  const onSignUp = () => {
    navigation.navigate('Signup', {name: 'Signup'});
  };

  // useEffect(() => {
  //   console.log('====================================');
  //   console.log('text > ', text);
  //   console.log('====================================');
  // }, [text]);

  return (
    <LoginScreen
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

export default LoginScreenContainer;

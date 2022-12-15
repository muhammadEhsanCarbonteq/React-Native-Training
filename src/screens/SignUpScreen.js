import React, {useState} from 'react';
import SignUpComponent from '../components/SignUpComponent';

function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('ehsan@gmail.com');
  const onCreateNewPassword = () => {
    navigation.navigate('CreatePassword', {name: 'CreatePassword'});
  };
  const onSignInPress = () => {
    navigation.navigate('Login', {name: 'Login'});
  };

  return (
    <SignUpComponent
      email={email}
      setEmail={setEmail}
      onCreateNewPassword={onCreateNewPassword}
      onSignInPress={onSignInPress}
    />
  );
}

export default SignUpScreen;

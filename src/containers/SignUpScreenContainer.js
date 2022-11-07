import React, {useState} from 'react';
import SignUpScreen from '../components/screens/SignUpScreen';

function SignUpScreenContainer({navigation}) {
  const [email, setEmail] = useState('ehsan@gmail.com');
  const onCreateNewPassword = () => {
    navigation.navigate('CreatePassword', {name: 'CreatePassword'});
  };
  const onSignInPress = () => {
    navigation.navigate('Login', {name: 'Login'});
  };

  return (
    <SignUpScreen
      email={email}
      setEmail={setEmail}
      onCreateNewPassword={onCreateNewPassword}
      onSignInPress={onSignInPress}
    />
  );
}

export default SignUpScreenContainer;

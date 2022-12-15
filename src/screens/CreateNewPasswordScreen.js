import React, { useState } from 'react';
import CreateNewPasswordComponent from '../components/CreateNewPasswordComponent';

function CreateNewPasswordContainer({ navigation, data, authentication }) {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [confirmPassword, onChangeconfirmPassword] = useState('password');
  const [password, onChangePassword] = useState('password');
  const onChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onChangeShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onPressBack = () => {
    let name = data == 'CreatePassword' ? 'Signup' : 'Login';
    navigation.navigate(name, { name: name });
  };
  const onSignUp = () => {
    authentication(true)
    navigation.navigate('Number', { name: 'Number' });
  };
  return (
    <CreateNewPasswordComponent
      data={data}
      showPassword={showPassword}
      showConfirmPassword={showConfirmPassword}
      confirmPassword={confirmPassword}
      onChangeconfirmPassword={onChangeconfirmPassword}
      password={password}
      onChangePassword={onChangePassword}
      onChangeShowPassword={onChangeShowPassword}
      onChangeShowConfirmPassword={onChangeShowConfirmPassword}
      onSignUp={onSignUp}
      onPressBack={onPressBack}
    />
  );
}

export default CreateNewPasswordContainer;

import React, {useState} from 'react';
import CreateNewPasswordScreen from '../components/screens/CreateNewPasswordScreen';

function CreateNewPasswordContainer({navigation, data}) {
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
    navigation.navigate(name, {name: name});
  };
  const onSignUp = () => {
    navigation.navigate('Number', {name: 'Number'});
  };
  return (
    <CreateNewPasswordScreen
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

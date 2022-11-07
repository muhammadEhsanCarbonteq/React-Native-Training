import React, {useState} from 'react';
import MobileNumberScreen from '../components/screens/MobileNumberScreen';

function MobileNumberScreenContainer({navigation}) {
  const [countryCode, setCountryCode] = useState({
    name: 'England',
    code: 'en',
    c_code: '+44',
    flag: require('../images/flag/England.png'),
  });
  const [number, setNumber] = useState('123456788');
  const onChangeCountryCode = obj => {
    setCountryCode(obj);
  };
  const onPressBack = () => {
    navigation.navigate('Login', {name: 'Login'});
  };

  const onNext = () => {
    navigation.navigate('OTP', {name: 'OTP'});
  };
  return (
    <MobileNumberScreen
      onPressBack={onPressBack}
      countryCode={countryCode}
      setCountryCode={onChangeCountryCode}
      number={number}
      setNumber={setNumber}
      onNext={onNext}
    />
  );
}

export default MobileNumberScreenContainer;

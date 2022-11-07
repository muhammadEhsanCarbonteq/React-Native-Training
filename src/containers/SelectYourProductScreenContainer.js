import React from 'react';
import SelectYourProductScreen from '../components/screens/SelectYourProductScreen';

function SelectYourProductScreenContainer({navigation}) {
  const onPressEvent = () => {
    navigation.navigate('Event', {name: 'Event'});
  };
  return <SelectYourProductScreen onPressEvent={onPressEvent} />;
}

export default SelectYourProductScreenContainer;

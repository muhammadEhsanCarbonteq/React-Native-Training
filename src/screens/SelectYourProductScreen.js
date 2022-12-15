import React from 'react';
import SelectYourProductComponent from '../components/SelectYourProductComponent';

function SelectYourProductScreen({navigation}) {
  const onPressEvent = () => {
    navigation.navigate('Event', {name: 'Event'});
  };
  return <SelectYourProductComponent onPressEvent={onPressEvent} />;
}

export default SelectYourProductScreen;

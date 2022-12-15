import React, {useState} from 'react';
import EventComponent from '../components/EventComponent';

function EventScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('Facebook Conference');
  const onSelect = text => {
    setSelect(text);
  };
  const onPressBack = () => {
    navigation.navigate('Product', {name: 'Product'});
  };
  const onNext = () => {
    navigation.navigate('Role', {name: 'Role'});
  };
  return (
    <EventComponent
      onPressBack={onPressBack}
      onNext={onNext}
      search={search}
      setSearch={setSearch}
      onSelect={onSelect}
      select={select}
    />
  );
}

export default EventScreen;

import React from 'react';
import HomeComponent from '../components/HomeComponent';

function HomeScreen({navigation}) {
  const onSelectMenu = text => {
    if (text == 'scan') {
      navigation.navigate('QRCode', {name: 'QRCode'});
    }
  };
  return <HomeComponent onSelectMenu={onSelectMenu} />;
}

export default HomeScreen;

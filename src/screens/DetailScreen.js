import React from 'react';
import DetailComponent from '../components/DetailComponent';

function DetailScreen({navigation}) {
  const onPressBack = () => {
    navigation.navigate('QRCode', {name: 'QRCode'});
  };
  const onScanQR = () => {
    navigation.navigate('Role', {name: 'Role'});
  };
  return <DetailComponent onPressBack={onPressBack} onScanQR={onScanQR} />;
}

export default DetailScreen;

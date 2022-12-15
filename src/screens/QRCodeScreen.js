import React from 'react';
import QRCodeComponent from '../components/QRCodeComponent';

function QRCodeScreen({navigation}) {
  const onPressBack = () => {
    navigation.navigate('Home', {name: 'Home'});
  };
  const onScanQR = () => {
    navigation.navigate('Details', {name: 'Details'});
  };
  return <QRCodeComponent onPressBack={onPressBack} onScanQR={onScanQR} />;
}

export default QRCodeScreen;

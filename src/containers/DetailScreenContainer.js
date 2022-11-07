import React from 'react';
import DetailScreen from '../components/screens/DetailScreen';

function DetailScreenContainer({navigation}) {
  const onPressBack = () => {
    navigation.navigate('QRCode', {name: 'QRCode'});
  };
  const onScanQR = () => {
    navigation.navigate('Role', {name: 'Role'});
  };
  return <DetailScreen onPressBack={onPressBack} onScanQR={onScanQR} />;
}

export default DetailScreenContainer;

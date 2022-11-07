import React from 'react';
import {PermissionsAndroid} from 'react-native';
import QRCodeScreen from '../components/screens/QRCodeScreen';

function QRCodeScreenContainer({navigation}) {
  const onPressBack = () => {
    navigation.navigate('Home', {name: 'Home'});
  };
  const onScanQR = () => {
    navigation.navigate('Details', {name: 'Details'});
  };
  return <QRCodeScreen onPressBack={onPressBack} onScanQR={onScanQR} />;
}

export default QRCodeScreenContainer;

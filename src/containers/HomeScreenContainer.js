import React, {useState} from 'react';
import HomeScreen from '../components/screens/HomeScreen';

function HomeScreenContainer({navigation}) {
  const [select, setSelect] = useState();
  const onSelectMenu = text => {
    if (text == 'scan') {
      navigation.navigate('QRCode', {name: 'QRCode'});
    }
  };
  return <HomeScreen onSelectMenu={onSelectMenu} />;
}

export default HomeScreenContainer;

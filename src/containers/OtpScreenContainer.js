import React, {useEffect, useRef, useState} from 'react';
import OtpScreen from '../components/screens/OtpScreen';

function OtpScreenContainer({navigation}) {
  const onPressBack = () => {
    navigation.navigate('Number', {name: 'Number'});
  };
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const [text1, onChangeText1] = useState();
  const [text2, onChangeText2] = useState();
  const [text3, onChangeText3] = useState();
  const [text4, onChangeText4] = useState();

  useEffect(() => {
    if (!text1 && !text2 && !text3 && !text4) {
      text1Ref.current?.focus();
      console.log('text1focus');
    } else if (text1 && !text2 && !text3 && !text4) {
      text2Ref.current?.focus();
    } else if (text1 && text2 && !text3 && !text4) {
      text3Ref.current?.focus();
    } else if (text1 && text2 && text3 && !text4) {
      text4Ref.current?.focus();
    }

    if (text1 && text2 && text3 && text4) {
      navigation.navigate('Product', {name: 'Product'});
    }
  }, [text1, text2, text3, text4]);
  return (
    <OtpScreen
      onPressBack={onPressBack}
      onChangeText1={onChangeText1}
      text1={text1}
      onChangeText2={onChangeText2}
      text2={text2}
      onChangeText3={onChangeText3}
      text3={text3}
      onChangeText4={onChangeText4}
      text4={text4}
      text1Ref={text1Ref}
      text2Ref={text2Ref}
      text3Ref={text3Ref}
      text4Ref={text4Ref}
    />
  );
}

export default OtpScreenContainer;

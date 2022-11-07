import React, {useEffect, useRef, useState} from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import SquareInput from '../common/SquareInput';
import styles from '../../styles/sharedStylesheet';

function OtpScreen({
  onPressBack,
  text1,
  onChangeText1,
  text2,
  onChangeText2,
  text3,
  onChangeText3,
  text4,
  onChangeText4,
  text1Ref,
  text2Ref,
  text3Ref,
  text4Ref,
}) {
  const [count, setCount] = useState(59);
  const timerRef = useRef(count);
  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setCount(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
      setCount(60);
    };
  }, []);
  //   useEffect(() => {
  //     let timer = setInterval(() => {
  //       setCount(count - 1);
  //       if (count == 1) {
  //         clearInterval(timer);
  //       }
  //     }, 1000);
  //     console.log('count>>> ', count);
  //   }, [count]);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={onPressBack}
        style={{
          width: 22,
        }}>
        <Image
          style={{
            width: 22,
            height: 20,
            marginTop: 70,
            // marginLeft: 15,
            marginBottom: 80,
          }}
          source={require('../../images/BackArrow.png')}
        />
      </Pressable>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 45,
            fontWeight: '600',
            color: 'black',
          }}>
          00:{count}
        </Text>
        <Text
          style={{
            maxWidth: 190,
            textAlign: 'center',
            color: 'black',
            fontSize: 14,
          }}>
          Type the verification code we’ve sent you at{' '}
          <Text
            style={{
              fontWeight: '900',
            }}>
            403 384 835
          </Text>
        </Text>
      </View>
      <View
        style={{
          marginTop: 35,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <SquareInput
          textRef={text1Ref}
          text={text1}
          onChangeText={onChangeText1}
        />
        <SquareInput
          textRef={text2Ref}
          text={text2}
          onChangeText={onChangeText2}
        />
        <SquareInput
          textRef={text3Ref}
          text={text3}
          onChangeText={onChangeText3}
        />
        <SquareInput
          textRef={text4Ref}
          text={text4}
          onChangeText={onChangeText4}
        />
      </View>
      <Pressable
        style={{
          position: 'absolute',
          bottom: 30,
          marginBottom: 0,
          alignSelf: 'center',
        }}>
        <KeyboardAvoidingView behavior="position">
          <Text
            style={{
              color: '#3B68FF',
            }}>
            Send again
          </Text>
        </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
}

export default OtpScreen;

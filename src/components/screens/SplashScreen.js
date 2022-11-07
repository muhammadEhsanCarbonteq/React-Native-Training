import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

function SplashScreen() {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#3B68FF',
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: '53%', height: '25%'}}
          source={require('../../images/Group30.png')}
        />
        <Text
          style={{
            fontSize: 74,
            color: 'white',
            marginTop: 10,
          }}>
          VIRAL
        </Text>
        <Text
          style={{
            fontSize: 38,
            color: 'white',
            marginTop: -25,
          }}>
          SOLUTIONS
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;

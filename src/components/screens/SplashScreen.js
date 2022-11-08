import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3B68FF',
  },
  body: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;

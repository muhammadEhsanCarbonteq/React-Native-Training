import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import GroupSvg from '../../images/Group30.svg'
import SplashScreen from 'react-native-splash-screen'



function SplashComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <GroupSvg
          style={{width: '53%', height: '25%'}}
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
export default SplashComponent;

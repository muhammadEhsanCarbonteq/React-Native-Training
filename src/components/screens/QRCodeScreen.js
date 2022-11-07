import React, {useEffect, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';

function QRCodeScreen({onPressBack, onScanQR}) {
  const [flash, setFlash] = useState(false);

  const onSuccess = e => {
    console.log('data >>. ', e);
    onScanQR();
  };
  return (
    // <SafeAreaView>

    <>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          backfaceVisibility: 'hidden',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: '8%',
          paddingVertical: '15%',
        }}>
        <View
          style={{
            height: '80%',
            width: '5%',
          }}>
          <TouchableOpacity
            onPress={onPressBack}
            style={{
              zIndex: 10000,
            }}>
            <Image
              style={{
                backfaceVisibility: 'hidden',
              }}
              source={require('../../images/arrow-left.png')}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'white',
          }}>
          Scane QR code
        </Text>
        <View
          style={{
            height: '90%',
            width: '6%',
            // alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <TouchableOpacity
            // style={{
            //   width: '100%',
            //   height: '100%',
            // }}
            onPress={() => setFlash(!flash)}>
            <Image
              style={{
                backfaceVisibility: 'hidden',
              }}
              source={require('../../images/Flash.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        cameraStyle={{
          height: '100%',
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          backfaceVisibility: 'hidden',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          bottom: 0,
          paddingHorizontal: '5%',
          paddingVertical: '12%',
          backgroundColor: 'rgba(105,105,105, 0.8)',
          justifyContent: 'center',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: '3%',
            alignItems: 'center',
            // zIndex: 10001,
            width: '100%',
          }}>
          <Image
            style={{
              marginBottom: 18,
            }}
            source={require('../../images/sun.png')}
          />
          <Text
            style={{
              color: 'white',
            }}>
            Light
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderColor: '#B3BBD4',
            height: '100%',
            borderLeftWidth: 2,
            marginHorizontal: '7%',
          }}
        />
        <View
          style={{
            paddingHorizontal: '3%',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginBottom: 18,
            }}
            source={require('../../images/help-circle.png')}
          />
          <Text
            style={{
              color: 'white',
            }}>
            Help
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    position: 'absolute',
    fontSize: 18,
    padding: 32,
    top: 150,
    zIndex: 100,
    color: '#777',
    backgroundColor: '#00000070',
    marginTop: 600,
    borderRadius: 50,
    backfaceVisibility: 'visible',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // backfaceVisibility: '0.5',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
    backgroundColor: 'transparent',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRCodeScreen;

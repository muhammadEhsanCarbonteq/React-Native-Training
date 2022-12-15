import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ArrowLeft from '../images/arrow-left.svg'
import FlashSvg from '../../images/Flash.svg';
import HelpCircleSvg from '../../images/help-circle.svg';
import SunSvg from '../../images/sun.svg';

function QRCodeComponent({onPressBack, onScanQR}) {
  const [flash, setFlash] = useState(false);

  const onSuccess = e => {
    console.log('data >>. ', e);
    onScanQR();
  };
  return (
    // <SafeAreaView>

    <>
      <View style={styles.topContainer}>
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
            <ArrowLeft
              style={{
                backfaceVisibility: 'hidden',
              }}
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
            alignSelf: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => setFlash(!flash)}>
            <FlashSvg
              style={{
                backfaceVisibility: 'hidden',
              }}
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
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <SunSvg
            style={{
              marginBottom: 18,
            }}
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
        <TouchableOpacity style={styles.buttonContainer}>
          <HelpCircleSvg
            style={{
              marginBottom: 18,
            }}
          />
          <Text
            style={{
              color: 'white',
            }}>
            Help
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    zIndex: 1000,
    backfaceVisibility: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '8%',
    paddingVertical: '15%',
  },
  bottomContainer: {
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
  },
  buttonContainer: {
    paddingHorizontal: '3%',
    alignItems: 'center',
    // zIndex: 10001,
    width: '100%',
  },
});

export default QRCodeComponent;

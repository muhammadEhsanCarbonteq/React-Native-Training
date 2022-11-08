import React from 'react';
import {Image, Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import styles from '../../styles/sharedStylesheet';
import CustomButton from '../common/CustomButton';
import CustomDetails from '../common/CustomDetails';

function DetailScreen({onPressBack, onScanQR}) {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={onPressBack}
          style={{
            width: 22,
          }}>
          <Image
            style={styles.backArrowImage}
            source={require('../../images/BackArrow.png')}
          />
        </Pressable>
        <TitleDescriptionComponent
          title={'Details'}
          description={'Here are the details of the attendant'}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <ScrollView
            style={{
              width: '50%',
            }}>
            <CustomDetails title={'Last Name'} value={'Ehsan'} />
            <CustomDetails title={'Phone'} value={'+923044796010'} />
            <CustomDetails title={'City'} value={'Lahore'} />
            <CustomDetails title={'State'} value={'Punjab'} />
            <CustomDetails title={'DOB'} value={'25 March 1998'} />
            <CustomDetails title={'Ethnicity'} value={'Sayed'} />
          </ScrollView>
          <ScrollView
            style={{
              width: '50%',
            }}>
            <CustomDetails title={'First Name'} value={'Muhammad'} />
            <CustomDetails title={'Email'} value={'dumy@gmail.com'} />
            <CustomDetails title={'Zip'} value={'54000'} />
            <CustomDetails title={'Address'} value={'3891 Ranchview  '} />
            <CustomDetails title={'Race'} value={'Punjabi'} />
            <CustomDetails title={'Gender'} value={'Male'} />
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 15,
            width: '100%',
          }}>
          <CustomButton title={'Scan Barcode'} onPress={onScanQR} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailScreen;

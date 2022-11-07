import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import styles from '../../styles/sharedStylesheet';
import CustomButton from '../common/CustomButton';
import userDetails from '../../constants/details';
import CustomDetails from '../common/CustomDetails';
import {Value} from 'react-native-reanimated';
import {value} from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

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
            style={{
              width: 22,
              height: 20,
              marginLeft: 15,
              marginBottom: 30,
            }}
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
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          borderRadius: 30,
          backgroundColor: 'white',
          width: '100%',
        }}>
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

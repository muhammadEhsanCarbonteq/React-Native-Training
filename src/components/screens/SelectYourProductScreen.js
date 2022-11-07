import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import CustomProductComponent from '../common/CustomProductComponent';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import evenet from '../../images/EventScreen.png';
import Airport from '../../images/JetPlane.png';
import styles from '../../styles/sharedStylesheet';

function SelectYourProductScreen({onPressEvent}) {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            marginTop: 30,
          }}>
          <TitleDescriptionComponent title={'Select Your Product!'} />
        </View>
        <Pressable
          style={{
            marginHorizontal: 16,
            marginVertical: 15,
          }}
          onPress={onPressEvent}>
          <CustomProductComponent title={'Event Screen'} image={evenet} />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 16,
          }}>
          <CustomProductComponent title={'Airport Testing'} image={Airport} />
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

export default SelectYourProductScreen;

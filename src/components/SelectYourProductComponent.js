import React from 'react';
import { Pressable, SafeAreaView, View} from 'react-native';
import CustomProductComponent from './common/CustomProductComponent';
import TitleDescriptionComponent from './common/TitleDescriptionComponent';
import evenet from '../../images/EventScreen.svg';
import Airport from '../../images/JetPlane.svg';
import styles from './common/sharedStylesheet';

function SelectYourProductComponent({onPressEvent}) {
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
          <CustomProductComponent title={'Event Screen'} Eimage={evenet} />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 16,
          }}>
          <CustomProductComponent title={'Airport Testing'} Eimage={Airport} />
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

export default SelectYourProductComponent;

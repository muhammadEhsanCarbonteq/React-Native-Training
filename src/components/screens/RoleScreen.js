import React from 'react';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import TitleDescriptionComponent from '../common/TitleDescriptionComponent';
import styles from '../../styles/sharedStylesheet';
import CustomSingleRole from '../common/CustomSingleRole';
import roleList from '../../constants/roleList';

function RoleScreen({onPressBack, onSelectRole}) {
  return (
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
        title={'Select Event!'}
        description={'Select the event you are working.'}
      />
      <View>
        {roleList.map(role => {
          return (
            <CustomSingleRole
              id={role.id}
              onSelectRole={onSelectRole}
              image={role.image}
              name={role.name}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default RoleScreen;

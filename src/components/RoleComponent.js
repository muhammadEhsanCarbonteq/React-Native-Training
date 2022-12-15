import React from 'react';
import { Pressable, SafeAreaView, View} from 'react-native';
import TitleDescriptionComponent from './common/TitleDescriptionComponent';
import styles from './common/sharedStylesheet';
import CustomSingleRole from './common/CustomSingleRole';
import roleList from '../../constants/roleList';
import BackArrow from '../../images/BackArrow.svg'


function RoleComponent({onPressBack, onSelectRole}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={onPressBack}
        style={{
          width: 22,
        }}>
        <BackArrow
          style={styles.backArrowImage}
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
              Eimage={role.image}
              name={role.name}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default RoleComponent;

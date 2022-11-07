import React, {useState} from 'react';
import RoleScreen from '../components/screens/RoleScreen';

function RoleScreenContainer({navigation}) {
  const [roleType, setRoleType] = useState();
  const onPressBack = () => {
    navigation.navigate('Event', {name: 'Event'});
  };
  const onSelectRole = role => {
    setRoleType(role);
    navigation.navigate('Home', {name: 'Home'});
  };
  return (
    <RoleScreen
      onSelectRole={onSelectRole}
      roleType={roleType}
      onPressBack={onPressBack}
    />
  );
}

export default RoleScreenContainer;

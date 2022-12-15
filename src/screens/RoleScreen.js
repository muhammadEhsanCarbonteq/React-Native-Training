import React, {useState} from 'react';
import RoleComponent from '../components/RoleComponent';

function RoleScreen({navigation}) {
  const [roleType, setRoleType] = useState();
  const onPressBack = () => {
    navigation.navigate('Event', {name: 'Event'});
  };
  const onSelectRole = role => {
    setRoleType(role);
    navigation.navigate('Home', {name: 'Home'});
  };
  return (
    <RoleComponent
      onSelectRole={onSelectRole}
      roleType={roleType}
      onPressBack={onPressBack}
    />
  );
}

export default RoleScreen;

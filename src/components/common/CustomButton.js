import React from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/sharedStylesheet';

function CustomButton({onPress, title}) {
  return (
    <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
      <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;

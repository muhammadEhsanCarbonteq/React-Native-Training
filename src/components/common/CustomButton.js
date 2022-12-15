import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

function CustomButton({onPress, title}) {
  return (
    <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
      <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    borderRadius: 15,
    width: '100%',
    backgroundColor: '#3B68FF',
    padding: 18,
    marginTop: 16,
  },
  customButtonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  }
});

export default CustomButton;

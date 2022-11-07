import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

function CustomSearchbar({text, onChangeText}) {
  return (
    <View style={styles.searchSection}>
      <Image
        style={styles.searchIcon}
        source={require('../../images/Vector.png')}
      />
      <TextInput
        style={styles.input}
        placeholder={'Search'}
        // placeholderTextColor={'#B3BBD4'}
        onChangeText={onChangeText}
        value={text}
        // underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEF0',
    borderRadius: 30,
  },
  searchIcon: {
    padding: 10,
    width: 16,
    height: 16,
    backgroundColor: '#EEEEF0',
    marginLeft: 16,
    marginRight: 10,
    paddingVertical: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#EEEEF0',
    color: 'black',
  },
});

export default CustomSearchbar;

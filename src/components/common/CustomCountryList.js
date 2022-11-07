import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {countries} from '../../constants/countryList';
import SelectDropdown from 'react-native-select-dropdown';

function CustomCountryList({setCountryCode, countryCode, number, setNumber}) {
  return (
    <View
      style={{
        position: 'relative',
      }}>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 20,
          marginBottom: -15,
          zIndex: 100,
        }}>
        Country/Region
      </Text>
      <View
        style={{
          width: '100%',
          paddingRight: 20,
        }}>
        <SelectDropdown
          search
          dropdownStyle={{
            width: '90%',
            borderRadius: 15,
            borderWidth: 1,
          }}
          buttonStyle={{
            borderBottomWidth: 2,
            width: '105%',
            marginLeft: -18,
            borderColor: '#E8E6EA',
            alignSelf: 'center',
            position: 'relative',
            backgroundColor: 'transparent',
          }}
          buttonTextStyle={{position: 'absolute', right: 10}}
          searchInputStyle={{width: '178%'}}
          selectedRowStyle={{backgroundColor: '#B3BBD4'}}
          searchPlaceHolder="Search Country"
          searchPlaceHolderColor="black"
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log('selectedItem > ', selectedItem);
            setCountryCode(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return `${selectedItem.name} (${selectedItem.c_code})`;
          }}
          rowTextForSelection={(item, index) => {
            return `${item.name} (${item.c_code})`;
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 25, height: 18, borderRadius: 5, marginRight: 10}}
          source={countryCode.flag}
        />
        <TextInput
          value={number}
          onChangeText={setNumber}
          placeholder="enter number"
          keyboardType="numeric"
          maxLength={9}
        />
      </View>
    </View>
  );
}

export default CustomCountryList;

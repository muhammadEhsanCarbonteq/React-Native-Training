import React from 'react';
import {Text, TextInput} from 'react-native';

function SquareInput({text, onChangeText, textRef}) {
  return (
    <TextInput
      ref={textRef}
      style={{
        height: 70,
        width: 67,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#EEEEF0',
        textAlign: 'center',
        fontSize: 34,
      }}
      keyboardType="number-pad"
      maxLength={1}
      value={text}
      onChangeText={onChangeText}
    />
  );
}

export default SquareInput;

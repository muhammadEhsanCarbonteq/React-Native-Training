import React from 'react';
import {Text, View} from 'react-native';
import styles from './sharedStylesheet';

function TitleDescriptionComponent({title, description}) {
  return (
    <View
      style={{
        marginHorizontal: 18,
        width: '70%',
      }}>
      {title && <Text style={styles.customTitle}>{title}</Text>}
      {description && (
        <Text style={styles.customDescription}>{description}</Text>
      )}
    </View>
  );
}

export default TitleDescriptionComponent;

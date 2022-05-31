import React from 'react';
import {Image, View} from 'react-native';

import styles from './CardThumbnail.styles';

interface Props {
  bgColor: string;
  imageUri: string;
}

export const CardThumbnail: React.FC<Props> = ({imageUri, bgColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Image style={styles.thumbnail} source={{uri: imageUri}} />
    </View>
  );
};

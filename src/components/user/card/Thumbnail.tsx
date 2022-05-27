import React from 'react';
import {Image, View} from 'react-native';

import styles from './Thumbnail.styles';

interface Props {
  bgColor: string;
  imageUri: string;
}

export const Thumbnail: React.FC<Props> = ({imageUri, bgColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Image style={styles.thumbnail} source={{uri: imageUri}} />
    </View>
  );
};

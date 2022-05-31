import React from 'react';
import {Image, View} from 'react-native';

import styles from './CardThumbnail.styles';

interface Props {
  size: number;
  border?: number;
  bgColor: string;
  imageUri: string;
}

export const CardThumbnail: React.FC<Props> = ({
  imageUri,
  bgColor,
  size = 64,
  border = 3,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          width: size + border * 2,
          height: size + border * 2,
        },
      ]}>
      <Image
        style={[styles.thumbnail, {width: size, height: size}]}
        source={{uri: imageUri}}
      />
    </View>
  );
};

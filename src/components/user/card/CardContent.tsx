import React from 'react';
import {Text, View} from 'react-native';

import styles from './CardContent.styles';

interface Props {
  title: string;
  subTitle: string;
}

export const CardContent: React.FC<Props> = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

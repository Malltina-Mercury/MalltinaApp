import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface Props {}

export const Loader: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    textAlign: 'center',
  },
});

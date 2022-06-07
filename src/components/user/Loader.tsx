import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface Props {}

const Loader: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    textAlign: 'center',
  },
});

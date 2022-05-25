import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

interface LoaderProps {}

const Loader = (props: LoaderProps) => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color="grey" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    textAlign: 'center'
  }
});

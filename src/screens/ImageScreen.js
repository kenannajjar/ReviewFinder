import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageScreen = ({ route }) => {
  const { imageUri } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default ImageScreen;

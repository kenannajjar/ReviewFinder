import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

const ImageScreen = ({ route }) => {
  const { imageUri } = route.params;
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getDescriptionFromBackend = async (base64Image) => {
    setIsLoading(true);
    try {
      const response = await axios.post('YOUR_BACKEND_ENDPOINT', {
        image: base64Image,
        query: "What is the product in this image?",
      });
      
      if (response.data) {
        setDescription(response.data.description);
      } else {
        console.log('No description found in response');
      }
    } catch (error) {
      console.error("There was an error getting the image description:", error);
      setDescription('Failed to get description.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    FileSystem.readAsStringAsync(imageUri, { encoding: 'base64' })
      .then(base64Image => {
        getDescriptionFromBackend(base64Image);
      })
      .catch(error => {
        console.error("There was an error reading the image file:", error);
        setDescription('Failed to read image file.');
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      {isLoading ? (
        <Text style={styles.loadingText}>Analyzing image...</Text>
      ) : (
        <Text style={styles.descriptionText}>{description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'blue',
  },
});

export default ImageScreen;

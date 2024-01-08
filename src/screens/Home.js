import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';

export default function Home({ navigation }) { // Destructure navigation from props
    const openImagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const firstAsset = result.assets[0]; // Define firstAsset here
            navigation.navigate('ImageScreen', { imageUri: firstAsset.uri }); // Now this should work
        }
    };
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.searchBar}>
                    <Image source={require('../assets/search.png')} style={styles.searchIcon} />
                    <TextInput style={styles.textInput} placeholder="Search" />
                    <TouchableOpacity style={styles.cameraButton} onPress={openImagePicker}>
                        <Image source={require('../assets/camera-viewfinder.png')} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    searchBar: {
        flexDirection: "row",
        backgroundColor: "#C3C3C3",
        height: 56,
        borderRadius: 28,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center",
        flexDirection: "row"
    },
    searchIcon: {
        height: 28,
        width: 28,
        marginLeft: 10
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 20
    },
    cameraButton: {
        marginLeft: 10
    },
    cameraIcon: {
        marginRight: 15,
        height: 35,
        width: 35
    }
});
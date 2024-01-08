import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.searchBar}>
                    <Image
                        source={require('../assets/search.png')} style={styles.searchIcon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                    />
                    <TouchableOpacity style = {styles.cameraButton}>
                    <Image
                        source={require('../assets/camera-viewfinder.png')} style={styles.cameraIcon} />

                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
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
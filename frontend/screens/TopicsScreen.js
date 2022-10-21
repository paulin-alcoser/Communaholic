import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TopicsScreen({ navigation, route }) {
    const { username } = route.params 
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/img/TopicsBackground.png')} resizeMode="cover" style={styles.image}>
                <TouchableOpacity onPress={() => navigation.navigate('Objectives', { username })} style={styles.touchable}>
                    <Text style={styles.text}>Corporate Sustainability</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center"
    },
    touchable: {
        position: 'absolute',
        right: 5,
        top: '31%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
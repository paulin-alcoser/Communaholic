import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ImageBackground, View, TouchableOpacity, TextInput, Animated, Easing } from 'react-native';
import React, { useRef, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function LoadScreen({ navigation }) {
    const [username, onChangeUsername] = React.useState("Alice")
    const userFade = useRef(new Animated.Value(0)).current
    const buttonFade = useRef(new Animated.Value(0)).current;
    // useEffect(() => {
    //     Animated.timing(userFade, {
    //         toValue: 1,
    //         duration: 2000,
    //         useNativeDriver: true,
    //     }).start();
    //     Animated.timing(buttonFade, {
    //         toValue: 1,
    //         duration: 2000,
    //         useNativeDriver: true,
    //     }).start();
    // }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: "flex-end",
            alignItems: "center",
        },
        logo: {
            justifyContent: "center",
            alignItems: "center"
        },
        check: {
            color: '#cc99ff',
            fontSize: 40,
            marginBottom: '33%',
            opacity: buttonFade
        },
        input: {
            marginTop: '10%',
            marginBottom: '10%',
            height: 40,
            margin: 12,
            borderWidth: 2,
            borderColor: '#cc99ff',
            backgroundColor: 'white',
            padding: 20,
            width: '50%',
            borderRadius: 15,
            color: 'black',
            opacity: userFade
        },
    });
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background_load.png')} resizeMode='cover' style={styles.image}>
                {/* <View style={styles.imageContainer}>
                    <Image style={styles.logo} source={require('../assets/img/logo.png')}></Image>
                </View> */}

                <TextInput
                    style={styles.input}
                    onChangeText={(val) => onChangeUsername(val)}
                    placeholder="username"
                    value={username}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Animation', { username })}>
                    <MaterialCommunityIcons name="arrow-right-thin-circle-outline" style={styles.check} />
                </TouchableOpacity>


            </ImageBackground>
        </View>
    );
}



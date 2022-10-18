import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React, { useRef, useEffect } from 'react'

export default function AnimationScreen({ navigation, route }) {
    const backgroundFade = useRef(new Animated.Value(0)).current;
    const logoFade = useRef(new Animated.Value(0)).current;
    const { username } = route.params

    useEffect(() => {
        Animated.timing(backgroundFade, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
            /* completion callback */

            navigation.navigate('Topics')

        });
        Animated.timing(logoFade, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#cc99ff',
            opacity: backgroundFade
        },
        message: {
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
            opacity: logoFade
        }
    })

    return (
        <Animated.View style={styles.container}>
            <Animated.Text style={styles.message}> Welcome, {username}!{'\n'}
                at Lufthansa Sustainability{'\n'}
                Training Cabinet!
            </Animated.Text>
        </Animated.View>
    )
}


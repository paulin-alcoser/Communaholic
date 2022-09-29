import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { COLORS } from '../constants/index'

const NUM_OF_OBJECTIVES = 3

export default function ObjectivesScreen({ navigation }) {

    const [obj1Pressed, setObj1Pressed] = useState(false)
    const [obj2Pressed, setObj2Pressed] = useState(false)
    const [obj3Pressed, setObj3Pressed] = useState(false)

    useEffect(() => {
        if (obj1Pressed &&
            obj2Pressed &&
            obj3Pressed) {
            navigation.navigate('Quiz')
        }
    }, [obj1Pressed, obj2Pressed, obj3Pressed])
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.png')} resizeMode="contain" style={styles.image}>
                <Image style={styles.home} source={require('../assets/img/small_logo.png')} />
                <Image style={styles.puzzle} source={require('../assets/img/puzzle.png')} />
                <Text style={styles.title}> Learning objectives of this challenge:</Text>
                <Text style={styles.note}> Tap each of these boxes below to start the challenge*</Text>
                <TouchableOpacity onPress={() => setObj1Pressed(true)}>
                    <Text style={obj1Pressed ? styles.objectivesPressed : styles.objectives}> Build a reputation as a company focused on sustainability.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setObj2Pressed(true)}>
                    <Text style={obj2Pressed ? styles.objectivesPressed : styles.objectives}> Manage suppy chains more responsibly and effectively </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setObj3Pressed(true)}>
                    <Text style={obj3Pressed ? styles.objectivesPressed : styles.objectives}> Identify the distinctions between supply chains and value chains</Text>
                </TouchableOpacity>
                <Image style={styles.dots} source={require('../assets/img/dots.png')} />
            </ImageBackground>
            {/* cc99ff */}
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
        justifyContent: 'flex-end',
    },
    touchable: {
        position: 'absolute',
        right: 5,
        top: '31%',
    },
    home: {
        position: 'absolute',
        top: '5%',
        left: '10%',

    },
    puzzle: {
        position: 'absolute',
        top: '5%',
        right: '5%'
    },
    title: {
        fontSize: 30,
        // fontWeight: 'bold',
        justifyContent: 'center',
        width: '80%',
        margin: 15,
        lineHeight: 45,

    },
    note: {
        marginLeft: 20,
        marginTop: '10%',
        marginBottom: 15,
        width: '70%',
        fontSize: 12,
        color: 'gray'

    },
    objectives: {
        padding: 10,
        backgroundColor: '#cc99ff',
        marginLeft: '5%',
        marginBottom: 18,
        width: '70%',
        borderRadius: 25,
        overflow: 'hidden',
        color: 'white'
    },
    objectivesPressed: {
        padding: 10,
        backgroundColor: 'transparent',
        marginLeft: '5%',
        marginBottom: 18,
        width: '70%',
        borderRadius: 25,
        overflow: 'hidden',
        color: 'transparent'
    },
    dots: {
        marginTop: 10,
        marginBottom: '30%',
        marginLeft: '5%'
    }
});
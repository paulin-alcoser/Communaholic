import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TouchableHighlight, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const NUM_OF_OBJECTIVES = 3
const friends = [
    {
        name: 'Bob',
        activity: 'Watching LinkedIn learning',
    },
    {
        name: 'Maria',
        activity: 'Solving Corporate Sustainability challenge',
    },
    {
        name: 'Ian',
        activity: 'Solving Corporate Sustainability challenge',
    },
    {
        name: 'Alice',
        activity: 'Watching LinkedIn learning',
    },
    {
        name: 'Karen',
        activity: 'Watching LinkedIn learning',
    },
    {
        name: 'Pau',
        activity: 'Solving Corporate Sustainability challenge',
    },
]

export default function ObjectivesScreen({ navigation }) {

    const [obj1Pressed, setObj1Pressed] = useState(false)
    const [obj2Pressed, setObj2Pressed] = useState(false)
    const [obj3Pressed, setObj3Pressed] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (obj1Pressed &&
            obj2Pressed &&
            obj3Pressed) {
            navigation.navigate('Challenge')
        }
    }, [obj1Pressed, obj2Pressed, obj3Pressed])

    console.log(modalOpen)
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.png')} resizeMode="contain" style={styles.image}>
                <Modal visible={modalOpen} animationType='slide'>
                    <View style={{
                        backgroundColor: '#cc99ff',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <MaterialCommunityIcons onPress={() => setModalOpen(false)} name="menu-down" style={{
                            fontSize: 50,
                            position: 'absolute',
                            top: '7%',
                            right: '45%',
                            zIndex: 3,
                            color: 'white'
                        }} />
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            alignSelf: 'flex-start',
                            marginLeft: '5%',
                            marginBottom: '5%',
                        }}> Teammates Activity (6)</Text>
                        {friends.map(friend => (
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                // justifyContent: 'space-evenly',
                                alignItems: 'center',
                                marginLeft: '10%',
                                width: '100%',
                                marginBottom: '5%'
                            }}>
                                <Text style={{
                                    backgroundColor: 'white',
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                    color: '#cc99ff',
                                    textAlign: 'center',
                                    alignItems: 'center'
                                }}>{friend.name[0]} </Text>

                                <Text style={{
                                    color: 'white',
                                    marginLeft: '2%'

                                }}>
                                    {friend.name} is {friend.activity}
                                </Text>


                            </View>
                        ))}

                    </View>
                </Modal>

                <MaterialCommunityIcons onPress={() => setModalOpen(true)} name="menu-up" style={{
                    fontSize: 50,
                    color: '#cc99ff',
                    position: 'absolute',
                    top: '8%',
                    right: '45%'

                }} />




                <Image style={styles.home} source={require('../assets/img/small_logo.png')} />

                <Image source={require('../assets/img/puzzle.png')} style={styles.puzzle} />
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
        </View >
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
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import io from "socket.io-client"

export default function GroupChallengeScreen({ navigation, route }) {
    const [messages, setMessages] = useState([
        {
            message: "Consumer advertising",
            ownerId: 1,
        },
        {
            message: "ESG Report",
            ownerId: 2,
        }
    ])

    useEffect(() => {
        const socket = io("http://localhost:3000")
    }, [])
    const renderMessages = () => {
        return messages.map((el, idx) => (
            <Text key={idx} style={{
                color: 'black',
                backgroundColor: '#cc99ff',
                padding: 10,
                borderWidth: 1,
                borderColor: 'transparent',
                fontSize: 12,
                margin: 10,
                textAlign: 'center',
                borderRadius: 15,
                alignSelf: idx % 2 == 0 ? 'flex-start' : 'flex-end',
                marginLeft: '10%',
                marginRight: '10%',
                overflow: 'hidden'
            }
            }> {el.message}</Text>
        )

        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.png')} resizeMode="contain" style={styles.image}>
                <Image style={styles.home} source={require('../assets/img/small_logo.png')} />
                <Image source={require('../assets/img/puzzle.png')} style={styles.puzzle} />
                <Text style={styles.title}> What are the challenges you currently face in sustainability communications?:</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={(val) => onChangeUsername(val)}
                    placeholder="Type Here"
                // value={username}
                />
                <View style={styles.messagesContainer}>
                    {renderMessages()}
                </View>

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
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 23,
        justifyContent: 'center',
        marginLeft: '15%',
        marginRight: '15%',
        width: '70%',
        lineHeight: 35,
        textAlign: 'center'
    },
    input: {
        marginTop: '10%',
        marginBottom: '10%',
        height: 40,
        margin: 12,
        borderBottomWidth: 2,
        borderColor: '#cc99ff',
        backgroundColor: 'transparent',
        padding: 20,
        width: '80%',
        borderRadius: 15,
        color: 'black',
        // opacity: userFade
    },
    messagesContainer: {
        width: '100%',
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
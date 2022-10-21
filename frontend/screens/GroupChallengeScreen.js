import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import io from "socket.io-client"
import {
    initiateSocket, listenToNewConnections, disconnectSocket,
    subscribeToChat, sendMessage, sendContribution, listenToContributions
} from '../sockets/sockets';

import Emoji from './EmojiScreen';

const Symbols = ["🐷", "🐶", "🐸", "🐭", "🐺", "🐻"]

export default function GroupChallengeScreen({ navigation, route }) {
    let socket
    const [contributions, setContributions] = useState(["Consumer advertising", "ESG Report"])
    const [contribution, setContribution] = useState("")
    const [numOfParticipants, setNumOfParticipants] = useState(1)
    const [room, setRoom] = useState(1)
    const { username } = route.params

    useEffect(() => {
        initiateSocket(room)
        listenToNewConnections((numberOfConnections) => {
            console.log('num of connections = ', numberOfConnections)
            setNumOfParticipants(numberOfConnections)
        })
        // listenToContributions((newCont) => {
        //     console.log('newCont; ', newCont)
        //     console.log('contributions: ', contributions)
        //     setContributions([...contributions, newCont])
        //     console.log('contributions after: ', contributions)
        // })
        console.log('username...', username)
    }, [])

    // useEffect(() => {
    //     console.log(io.sockets.adapter.rooms.get(roomName).size)
    // }, [io.sockets.adapter.rooms.get(1).size])

    const submitContribution = () => {
        console.log('what Iam submitting', contribution)
        sendContribution({ contribution, room, username })
        setContribution("")
    }

    const renderContributions = () => {
        return contributions.map((el, idx) => (
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
            }}>
                <Emoji symbol={Symbols[idx % 2]} />
                {' ' + el}</Text>
        )
        )
    }

    const renderParticipants = () => {
        const emojis = []
        for (let i = 0; i < 2; i++) {
            emojis.push(<Emoji key={i} symbol={Symbols[i]} />)
        }
        emojis.push(<Text style={{ color: "#cc99ff" }}>in the challenge</Text>)
        return emojis.map(emoji => (emoji))
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.png')} resizeMode="contain" style={styles.image}>
                <Image style={styles.home} source={require('../assets/img/small_logo.png')} />
                <Image source={require('../assets/img/puzzle.png')} style={styles.puzzle} />
                <Text style={styles.title}> What are the challenges you currently face in sustainability communications?:</Text>
                <TextInput
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={(val) => setContribution(val)}
                    onSubmitEditing={() => submitContribution()}
                    placeholder="Type Here"
                    value={contribution}
                />
                <View style={styles.messagesContainer}>
                    {renderContributions()}
                </View>
                <View style={styles.participantsContainer}>
                    {renderParticipants()}
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
    },
    participantsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        position: 'absolute',
        bottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
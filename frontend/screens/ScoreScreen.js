import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ScoreScreen({ navigation, route }) {
    const { score, videosLink, questionsLength } = route.params

    const renderVideos = () => {
        return (
            <View style={styles.links_container}>
                {
                    videosLink.map((video, id) => (
                        <Text onPress={() => Linking.openURL(`${video.url}`)} style={styles.links} key={id}>{video.title}</Text>
                    ))
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.png')} resizeMode="contain" style={styles.image}>
                <Image style={styles.home} source={require('../assets/img/small_logo.png')} />
                <Image style={styles.puzzle} source={require('../assets/img/puzzle.png')} />
                <Text style={styles.title}> Congrats! </Text>
                {/* RenderScore */}
                <Text style={styles.note}> You answered {score}/{questionsLength} questions correctly.</Text>
                <Text style={styles.note}> {videosLink.length && "Here are learning materials for questions you missed. We'll check back on those later."}</Text>
                <View style={styles.learning}>
                    <Image style={styles.puzzles} source={require('../assets/img/learning_puzzles.png')} />
                    {renderVideos()}
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Topics')} style={styles.button}>
                    <Text style={styles.buttonText}>Go back to challenges</Text>
                </TouchableOpacity>

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
        justifyContent: 'center',
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
        marginBottom: 5,
        width: '70%',
        fontSize: 14
    },
    learning: {
        alignSelf: 'center',
        display: 'flex',
        width: '75%'

    },
    button: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#cc99ff',
        width: '50%',
        borderRadius: 25,
        alignSelf: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontWeight: 'bold',
    },
    puzzles: {

    },
    links_container: {
        position: 'absolute',
        top: '45%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        // height: '25%',
        // backgroundColor: 'red'
    },
    links: {
        fontSize: 11,
        margin: 10,
        fontWeight: 'bold',
        backgroundColor: '#cc99ff',
        padding: 4,
        borderRadius: 3,
    }
})
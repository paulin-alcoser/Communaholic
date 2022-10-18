import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'


export default function ChallengeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.png')} resizeMode="contain" style={styles.image}>
                <Image style={styles.home} source={require('../assets/img/small_logo.png')} />
                <Image source={require('../assets/img/puzzle.png')} style={styles.puzzle} />
                <View style={styles.challenge_container}>
                    <Text key={1} style={styles.challenge_title}>Challenge room</Text>
                    <Text key={2} style={styles.challenge_inst}>**Choose your type of challenge. Both will be scored </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz', { needTimer: false })} style={styles.challenge_btn}>
                        <Text style={styles.challenge_btn_txt}> Challenge </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz', { needTimer: true })} style={styles.challenge_btn}>
                        <Text style={styles.challenge_btn_txt}> 60 second Challenge </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('GroupChallenge')} style={styles.challenge_btn}>
                        <Text style={styles.challenge_btn_txt}> Group Challenge </Text>
                    </TouchableOpacity>
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
    challenge_container: {
        height: '60%',
        width: '80%',
        backgroundColor: '#cc99ff',
        borderRadius: 10,
        // alignItems: 'center',
        justifyContent: 'flex-start'
    },
    challenge_title: {
        marginTop: '10%',
        marginLeft: '10%',
        fontSize: 28,
    },
    challenge_inst: {
        color: 'white',
        marginTop: '15%',
        marginLeft: '10%',
        marginRight: '20%'
    },
    challenge_btn: {
        backgroundColor: 'lightblue',
        height: '10%',
        width: '80%',
        alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 25,
        justifyContent: 'center'
    },
    challenge_btn_txt: {
        marginLeft: '10%'
    }
})
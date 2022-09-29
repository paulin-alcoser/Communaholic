import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Animated } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react'
import Data from '../Data/Data'
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';

export default function QuizScreen({ navigation }) {
  const allQuestions = Data
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
  const [correctOption, setCorrectOption] = useState(null)
  const [isOptionDisabled, setIsOptionDisabled] = useState(false)
  const [score, setScore] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [videosLink, setVideosLink] = useState([])

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex].correctOption
    setCurrentOptionSelected(selectedOption)
    setCorrectOption(correct_option);
    setIsOptionDisabled(true)
    if (selectedOption == correct_option) {
      setScore(score + 1)
    } else {
      setShowVideo(true)
      const video = {
        title: allQuestions[currentQuestionIndex].title,
        url: allQuestions[currentQuestionIndex].video
      }
      if (allQuestions[currentQuestionIndex].video) {
        setVideosLink([...videosLink, video])
      }
    }
    setShowNextButton(true)
  }

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      navigation.navigate('Score', { score, videosLink, questionsLength: allQuestions.length })
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentOptionSelected(null)
      setCorrectOption(null)
      setIsOptionDisabled(false);
      setShowNextButton(false);
    }
  }

  // const renderVideo = () => {
  //   return(
  //     <View style={styles.videContainer}>
  //       <Text style={styles.videoText}> Watch this LinkedIn Learning Video</Text>

  //     </View>
  //   )

  // }

  const renderQuestion = () => {
    return (
      <Text style={styles.question}> {allQuestions[currentQuestionIndex].question}</Text>
    )
  }

  const renderOptions = () => {
    return (
      <View>
        {
          allQuestions[currentQuestionIndex]?.options.map((option, index) => (
            <TouchableOpacity key={index + option} onPress={() => validateAnswer(index)} disabled={isOptionDisabled} style={[
              styles.options,
              {
                backgroundColor: index == correctOption
                  ? '#6666ff'
                  : index == currentOptionSelected
                    ? '#000033'
                    : '#cc99ff'
              }
            ]}>
              <Text key={option + index} style={styles.text}> {option}</Text>
              {/* show check or cross Icon based on correct answer */}
              {
                index == correctOption ? (
                  <View key={index} style={styles.checkBackground}>
                    <MaterialCommunityIcons name="check" style={styles.check} />
                  </View>

                ) : index == currentOptionSelected ? (
                  <View key={option} style={styles.checkBackground}>
                    <MaterialCommunityIcons name="close" style={styles.check} />
                  </View>
                ) : null
              }
            </TouchableOpacity>
          ))
        }
      </View >

    )
  }

  const renderNextButton = () => {
    return (
      <TouchableOpacity onPress={handleNext} style={showNextButton ? styles.nextButton : styles.nextButtonHidden} disabled={!showNextButton}>
        <Text style={showNextButton ? styles.nextText : styles.nextTextHidden}> Next </Text>
      </TouchableOpacity>
    )

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/img/background.png')} resizeMode="contain" style={styles.image}>
        <Image style={styles.home} source={require('../assets/img/small_logo.png')} />
        <Image style={styles.puzzle} source={require('../assets/img/puzzle.png')} />
        {/* Video */}
        { }
        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}
        {/* Next Button */}
        {renderNextButton()}
        {/* Progressive Bar */}
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
  options: {
    padding: 20,
    backgroundColor: '#cc99ff',
    marginLeft: '5%',
    marginBottom: 18,
    width: '75%',
    borderRadius: 25,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white'
  },
  question: {
    fontSize: 30,
    // fontWeight: 'bold',
    justifyContent: 'center',
    width: '85%',
    margin: 15,
    marginBottom: 30,
    lineHeight: 45,

  },
  checkBackground: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    color: 'white',
    fontSize: 20
  },
  nextButton: {
    marginLeft: '5%',
    marginTop: 20,
    width: '75%',
    backgroundColor: '#cc99ff',
    padding: 10,
    borderRadius: 15,
  },
  nextButtonHidden: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 5
  },
  nextText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  nextTextHidden: {
    color: 'transparent',
    fontSize: 20,
    textAlign: 'center'
  }

})
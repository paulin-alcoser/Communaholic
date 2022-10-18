import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ImageBackground, View } from 'react-native';
import LoadScreen from './screens/LoadScreen.js';
import AnimationScreen from './screens/AnimationScreen.js';
import TopicsScreen from './screens/TopicsScreen.js';
import ObjectivesScreen from './screens/ObjectivesScreen.js';
import QuizScreen from './screens/QuizScreen.js';
import ScoreScreen from './screens/ScoreScreen.js'
import ChallengeScreen from './screens/ChallengeScreen.js';
import GroupChallengeScreen from './screens/GroupChallengeScreen.js';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent'
        },
        headerTintColor: 'red',
        headerTransparent: true,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 20
        }
      }}>
        <Stack.Screen name="LoadScreen" component={LoadScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Animation" component={AnimationScreen} />
        <Stack.Screen name="Topics" component={TopicsScreen} />
        <Stack.Screen name="Objectives" component={ObjectivesScreen} />
        <Stack.Screen name="Challenge" component={ChallengeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
        <Stack.Screen name="GroupChallenge" component={GroupChallengeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});



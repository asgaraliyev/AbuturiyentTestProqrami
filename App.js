import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './Screens/FirstPage/FirstPage';
import LessonsExam from './Screens/LessonExams/LessonsExam';
import GroupExams from './Screens/GroupExams/GroupExams';
import History from './Screens/History/History';
const blue = '#2553AC';
const lightBlue = '#5C7CBA';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: blue,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="FirstPage"
          options={{
            headerShown: false,
          }}
          component={FirstPage}
        />
        <Stack.Screen
          name="LessonExams"
          options={{
            title: 'Fənn İmtahanı',
          }}
          component={LessonsExam}
        />
        <Stack.Screen
          name="GroupExams"
          options={{
            title: 'Qrup İmtahanı',
          }}
          component={GroupExams}
        />
        <Stack.Screen
          name="History"
          options={{
            title: 'Tarixçə',
          }}
          component={History}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

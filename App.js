import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import CreateScreen from './src/screens/CreateScreen/CreateScreen'
import ShowScreen from './src/screens/ShowScreen/ShowScreen'
import EditScreen from './src/screens/EditScreen/EditScreen'

import Feather from 'react-native-vector-icons/Feather'


// context

import { Provider } from './src/context/BlogContext'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog Application' }}>
          <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')} >
                <Feather name='plus' color="black" size={24} />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Show" component={ShowScreen} options={({ navigation,route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:route.params.id})} >
                <Feather name='edit' color="black" size={24} />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
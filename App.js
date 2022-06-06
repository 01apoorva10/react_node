import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'


//nodejs modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//api routes
// const playerRoute  = require('./api/routes/player') 
// app.use('/player' , playerRoute);

// const teamRoute  = require('./api/routes/team') 
// app.use('/teams' , teamRoute);

const userRoute =  require('./api/routes/user')
app.use('/user' , userRoute); 

//incase of bad url
app.use((request , response, next)=>{
    response.status(404).json({error: 'url not found' })
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//now the data must be parsed injsonformat


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


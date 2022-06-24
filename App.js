import React, {useState,useEffect} from "react";
// import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import * as React from 'react';
import { View, Text, Button, Image,SafeAreaView ,StyleSheet,TouchableOpacity} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Alarm from './Alarm';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import Clock from './Clock'
import {globalStyles} from './styles';


const Tab = createBottomTabNavigator();

export default function App() {

  const Clear = () => {
    Alarm(true)
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Alarm') {
              return (
                <MaterialIcons name="access-alarm" size={30} style ={ {color: focused? 'blue' : 'black'} }/>
              );
            } else if (route.name === 'Clock') {
              return (
               <MaterialCommunityIcons name="clock-time-four" size={30} style ={ {color: focused ? 'blue' : 'black'} }/>
              );
            }else if(route.name === 'Timer'){
              return(
              <MaterialCommunityIcons name="timer-sand" size={30}  style ={ {color: focused ? 'blue' : 'black'} }/>
              )
            }else if(route.name === 'Stopwatch'){
              return(
              <FontAwesome5 name="stopwatch"  size={30} style ={ {color: focused ? 'blue' : 'black'}}  />
              )
            }
          },
          headerStyle: {
            // padding:100,
            // margin:20,
          // backgroundColor: 'black',
          color:'white',
        },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'blue',
           headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:40,
          //  color:'white',
        },
        })
         
        }
      >
        <Tab.Screen
          name="Alarm"
          component={Alarm}
        />
        <Tab.Screen name="Clock" component={Clock} />
        <Tab.Screen name="Timer" component={Timer} />
        
        <Tab.Screen name="Stopwatch" component={Stopwatch} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

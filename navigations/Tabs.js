import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/Home'
import TaskScreen from '../screens/Task'
import CalenderScren from '../screens/Calender'
import ProfileScreen from '../screens/Profile'
import {colors,images} from '../theme'
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 20,
          borderRadius: 15,
          height: 60
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.home}
                resizemode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.primaryColor : "#88889D"
                }}
              />
            </View>
          )
        }}
        name='Home' component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.task}
                resizemode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ?   colors.primaryColor : "#88889D"
                }}
              />
            
            </View>
          )
        }}
        name='Task' component={TaskScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.calendar}
                resizemode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ?   colors.primaryColor : "#88889D"
                }}
              />
            </View>
          )
        }}
        name='Calender' component={CalenderScren} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.profile}
                resizemode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ?   colors.primaryColor : "#88889D"
                }}
              />
            </View>
          )
        }}
        name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default Tabs
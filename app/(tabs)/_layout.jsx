import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { StatusBar } from 'expo-status-bar'
const TabLayout = () => {
  return (
    <>
    <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#161622',
          headerShown: false
        }}
    >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'History',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
          }}
        />
    </Tabs>
        <StatusBar style='light' />
    </>
  )
}

export default TabLayout
import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Handbag from 'react-native-vector-icons/SimpleLineIcons'
import Person from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Profile,Search,Reels,Likes } from '../Stacks/stacks'
import Layout from '../../Layout'
export default function Tab() {
  let defaultSize = 25
  const Tab = createBottomTabNavigator();
  const optionsTab = {
    title: '',
    headerTransparent: true,
    headerShown: false,
  }
  const styleTab = {
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  const functionTeste = (route) => {
    if (route.name === 'TabHome') return (<Text style={{ alignItems: 'center' }}> <Icon name="home" size={defaultSize} /> </Text>)
    if (route.name === 'TabSearch') return (<Text> <Icon name="search1" size={defaultSize} /> </Text>)
    if (route.name === 'TabReels') return (<Text> <Icon name="playcircleo" size={defaultSize} /> </Text>)
    if (route.name === 'TabLikes') return (<Text> <Handbag name="handbag" size={defaultSize} /> </Text>)
    if (route.name === 'TabProfile') return (<Text> <Person name="person-circle-outline" size={defaultSize} /> </Text>)
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => functionTeste(route),
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
        tabBarStyle: { ...styleTab },
        tabBarShowLabel: false,
      })}
      initialRouteName={'TabHome'}
    >
      <Tab.Screen  options={{ ...optionsTab }} name={'TabHome'} component={Home} />
      <Tab.Screen  options={{ ...optionsTab }} name={'TabSearch'} component={Search} />
      <Tab.Screen  options={{ ...optionsTab }} name={'TabReels'} component={Reels} />
      <Tab.Screen  options={{ ...optionsTab }} name={'TabLikes'} component={Likes} />
      <Tab.Screen  options={{ ...optionsTab }} name={'TabProfile'} component={Profile} />
    </Tab.Navigator>
  );
}
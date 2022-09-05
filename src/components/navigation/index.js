import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DefaultPages } from './Stacks';
const Navigation = () => {
  return (
    <NavigationContainer>
      <DefaultPages />
    </NavigationContainer>
  )
}

export default Navigation
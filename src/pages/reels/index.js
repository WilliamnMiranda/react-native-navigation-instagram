import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
const Reels = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Reels</Text>
    </View>
  )
}

export default Reels
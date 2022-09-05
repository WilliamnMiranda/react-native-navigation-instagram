import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
const Likes = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Store</Text>
    </View>
  )
}

export default Likes
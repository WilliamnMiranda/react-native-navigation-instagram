import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
const Search = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>search</Text>
    </View>
  )
}

export default Search
import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
const Home = ({ navigation }) => {
  const data = [12,32,,3,213,2,13,]
  return (
    <Layout navigation={navigation}>
      <FlatList
        data={data}
        renderItem={Post}
        keyExtractor={(item, index) => index}
      />
    </Layout>
  )
}

export default Home
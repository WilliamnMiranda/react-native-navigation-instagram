import { View,FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from './Icons'
const Reels = () => {
  const numTeste = [1,2,3,4,5,6,7,8,43,64,6,4,6,43,6,4,6,]
  return (
    <View style={{borderBottomColor: 'grey',borderBottomWidth: 1}}>
      <FlatList
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={numTeste}
        renderItem={Icon}
        keyExtractor={(item,index) => index}
      />
    </View>
  )
}
export default Reels
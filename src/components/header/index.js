import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from './style'
export default function index({navigation}) {
  let defaultSize = 20
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../../assets/1.png')}
      />
      <View style={styles.icons}>
        <Text style={styles.icon}><Icon onPress={()=> navigation.navigate('Chat')} name="plussquareo" size={defaultSize} /></Text>
        <Text style={styles.icon}><Icon name="hearto" size={defaultSize} /></Text>
        <Text style={styles.icon}><Icon name="message1" size={defaultSize}  /></Text>
      </View>
    </View>
  )
}
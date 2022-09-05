import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles } from './style'
const Message = () => {
  return (
    <View style={styles.message}>
      <View style={styles.infos}>
        <Image
          style={styles.imagePost}
          source={require('../../../assets/profile.jpg')}
        />
        <View>
          <Text style={styles.name}>williamnm</Text>
          <View style={styles.infoMessage}>
            <Text numberOfLines={1} style={styles.previusMessage}>Você foi selecionado para a vaga </Text>
            <Text style={styles.timeMessage}>15m</Text>
          </View>
        </View>
      </View>
      <Text style={styles.cam}><Icon name="photo-camera" size={22}/></Text>
    </View>
  )
}

export default Message
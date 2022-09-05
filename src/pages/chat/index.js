import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderReturnStack from '../../components/return_stack'
import { FlatList } from 'react-native-gesture-handler'
import Message from '../../components/message'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Chat = ({navigation}) => {
  const data = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <View style={styles.main}>
      <HeaderReturnStack navigation={navigation} text={'chat'}/>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={Message}
        keyExtractor={(item,index) => index}
      />
      <View style={styles.camera}>
        <Text style={styles.camIcon}><Icon name="photo-camera" size={22}/></Text>
        <Text>Camera</Text>
      </View>
    </View>
  )
}

export default Chat
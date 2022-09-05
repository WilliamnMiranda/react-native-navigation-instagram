import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './style'
const Post = () => {
  let defaultSize = 22
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.infos}>
          <View style={styles.avatar}></View>
          <Text>William</Text>
        </View>
        <View>
          <Text>...</Text>
        </View>
      </View>

      <View>
        <Image
          style={styles.imagePost}
          source={require('../../../assets/cat.png')}
        />
        <View style={styles.containerOptions}>
            <View style={styles.optionsPost}>
              <View style={styles.iconsPost}>
                <Text> <Feather name="heart" size={defaultSize} /> </Text>
                <Text> <Feather name="message-circle" size={defaultSize} /> </Text>
                <Text> <Feather name="send" size={defaultSize} /> </Text>
              </View>
              <Text> <Icon name="playcircleo" size={defaultSize} /> </Text>
            </View>

            <View style={styles.interactions}>
              <View style={styles.avatarInteraction}></View>
              <View style={styles.othersImage}></View>
              <Text style={styles.messageInteraction}>Curtido por willliam e outras pessoas</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Post
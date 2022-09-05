import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
const Profile = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#FCFAFA',flex: 1}}>
      <View style={styles.headerProfile} >
        <View style={styles.usernamesearch}>
          <Text style={styles.textUsernamesearch}>Williamnm</Text>
        </View>
        <View style={styles.photoAndDescriptions}>
          <View style={styles.photoProfile} />
          <View style={styles.informationUsers}>
            <View style={styles.flexUserInformations}>
              <Text style={styles.numberOfInfomationUser}>2.422</Text>
              <Text style={styles.nameInformationUser}>Publicacoes</Text>
            </View>
            <View style={styles.flexUserInformations}>
              <Text style={styles.numberOfInfomationUser}>2.422</Text>
              <Text style={styles.nameInformationUser}>Seguidores</Text>
            </View>
            <View style={styles.flexUserInformations}>
              <Text style={styles.numberOfInfomationUser}>2.422</Text>
              <Text style={styles.nameInformationUser}>Seguindo</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.name}>William Nascimento</Text>
          <View style={styles.description}>
            <Text>Front end developer ♥ </Text>
          </View>
          <View>
            <Text style={{fontSize: 15}}>Seguido por <Text style={{fontWeight: '500'}}>techRecruiter e outras 134 pessas</Text></Text>
          </View>
        </View>
        <View style={styles.actionsUsers}>
          <TouchableOpacity style={styles.action}><Text>Seguindo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action}><Text>Mensagem</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action}><Text>Contato</Text></TouchableOpacity>
        </View>
        <View>
          <View></View>
        </View>
      </View>

    </View>
  )
}

export default Profile
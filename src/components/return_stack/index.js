import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Entypo'
const HeaderStack = ({ navigation, text }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.back}>
                <Text > <Icon name="chevron-left" size={30} /> </Text>
                <Text style={styles.page}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderStack
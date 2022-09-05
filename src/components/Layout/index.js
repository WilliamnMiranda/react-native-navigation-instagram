import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Reels from '../../components/reels'
import Header from '../../components/header'
const Layout = ({ children, navigation }) => {
    const data = [1,12,3,21,3,213,21,3];
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Header navigation={navigation} />
            <Reels />
            {children}
        </View>
    )
}

export default Layout
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../../pages/home'
import SearchPage from '../../../pages/search';
import ReelsPage from '../../../pages/reels';
import LikesPage from '../../../pages/likes';
import ProfilePage from '../../../pages/profile';
import ChatPage from '../../../pages/chat';
import Tabs from '../tabs'
const Stack = createNativeStackNavigator();
const options = {
    title: '',
    headerTransparent: true,
    headerShown: false,
}
export const DefaultPages = () => (
    <Stack.Navigator
    screenOptions={{...options}}
    >
        <Stack.Screen name='HomePage' component={Tabs} />
        <Stack.Screen name='Chat' component={ChatPage} />
    </Stack.Navigator>
)
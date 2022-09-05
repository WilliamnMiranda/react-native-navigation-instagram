import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../../pages/home'
import SearchPage from '../../../pages/search';
import ReelsPage from '../../../pages/reels';
import LikesPage from '../../../pages/likes';
import ProfilePage from '../../../pages/profile';
import ChatPage from '../../../pages/chat';
const Stack = createNativeStackNavigator();
const options = {
    title: '',
    headerTransparent: true,
    headerShown: false,
}

export const Home = () => (
    <Stack.Navigator
        screenOptions={{...options}}
    >
        <Stack.Screen name='Home' component={HomePage} />
    </Stack.Navigator>
)
export const Search = () => (
    <Stack.Navigator
        screenOptions={{...options}}
    >
        <Stack.Screen name='Search' component={SearchPage} />
    </Stack.Navigator>
)
export const Reels = () => (
    <Stack.Navigator 
        screenOptions={{...options}}
    >
        <Stack.Screen name='Reels' component={ReelsPage} />
    </Stack.Navigator>
)
export const Likes = () => (
    <Stack.Navigator
        screenOptions={{...options}}
    >
        <Stack.Screen name='Likes' component={LikesPage} />
    </Stack.Navigator>
)
export const Profile = () => (
    <Stack.Navigator
        screenOptions={{...options}}
    >
        <Stack.Screen name='Profile' component={ProfilePage} />
    </Stack.Navigator>
)
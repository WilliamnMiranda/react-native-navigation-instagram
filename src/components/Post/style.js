import { StyleSheet } from "react-native";

const paddingHorizontalDefault = 10
export const styles = StyleSheet.create({
    post: {
        color: 'red',
        backgroundColor: 'white',
    },
    header: {
        paddingHorizontal: paddingHorizontalDefault,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infos:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    avatar: {
        height: 30,
        width: 30,
        backgroundColor: 'red',
        borderRadius:50,
        marginRight: 10
    },
    imagePost: {
        minHeight: 300,
        maxHeight: 500,
        resizeMode: 'contain'
    },
    containerOptions: {
        padding: paddingHorizontalDefault
    },
    optionsPost:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10
    },
    iconsPost:{
        flexDirection: 'row'
    },
    interactions:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarInteraction:{
        height: 15,
        width: 15,
        backgroundColor: 'red',
        borderRadius:50,
        position: 'relative'
    },
    messageInteraction:{
        marginLeft: 10
    },
    othersImage:{
        height: 15,
        width: 15,
        borderRadius:50,
        position: 'absolute',
        backgroundColor: 'blue',
        left: 7
    }
})
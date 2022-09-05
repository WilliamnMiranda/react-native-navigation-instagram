import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    infos:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 65
    },
    imagePost: {
        height: 50,
        width: 50,
        borderRadius: 50,
        resizeMode: 'contain',
        marginRight: 10
    },
    message: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    name:{
        fontWeight: '400',
        fontSize: 16,
    },
    previusMessage: {
        maxWidth: 240,
        color: 'rgba(0,0,0,0.5)'
    },
    infoMessage:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeMessage:{
        color: 'rgba(0,0,0,0.5)'
    },
    cam:{
        position: 'relative',
        top: 10
    }
})
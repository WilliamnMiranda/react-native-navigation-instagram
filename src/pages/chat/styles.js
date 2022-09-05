import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'grey',
        borderBottomColor: 1,
        borderColor: 'black',
        height: 50
    },
    camera:{
        height: 40,
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.2)'
    },
    camIcon:{
        position: 'relative',
        top:1,
        marginRight: 5
    }
})
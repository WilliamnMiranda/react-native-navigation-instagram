import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    header: {
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10
    },
    icons: {
        alignItems: 'center',
        flexDirection: 'row',
        gap:'10px'
    },
    icon : {
        marginLeft: 18
    },
    logo : {
        width: 80,
        marginTop: 6,
        resizeMode: 'contain'
    }
});

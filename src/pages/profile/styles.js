import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerProfile: {
        paddingHorizontal: 10
    },
    usernamesearch:{
        padding: 10,
        fontWeight: '600',
        alignItems: 'center'
    },
    textUsernamesearch:{
        fontSize: 18
    },
    photoProfile:{
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: 'pink'
    },
    photoAndDescriptions:{
        flexDirection: 'row',
        marginBottom: 8
    },  
    informationUsers:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        flex: 1
    },
    flexUserInformations:{
        alignItems: 'center'
    },
    numberOfInfomationUser:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    nameInformationUser:{
        fontSize: 14,
        fontWeight: '500'
    },
    name:{
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 7
    },
    description:{},
    actionsUsers:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    action: {
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'rgb(255,253,254)',
        paddingVertical: 6,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        width: 120,
    }
})

export default styles
import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    wrap: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 240,
        paddingLeft: 10,
        paddingRight: 10,
        height: '100%',
        backgroundColor: '#1D2D54'
    },
    backWrap: {
        height: 64,
        paddingTop: 24,
        paddingLeft: 10,
        width: 240,
    },
    backIcon: {
        fontSize: 22,
        color: '#F6B710',
    },
    userInfoWrap: {
        width: 240,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    userInfoIcon: {
        fontSize: 120,
        color: '#F6B710',
    },
    userInfoText: {
        fontSize: 24,
        color: '#F6B710',
    },
    exitWrap: {
        width: 200,
        marginTop: width > height ? 20 : 60,
    },
    exitContent: {
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exitIcon: {
        fontSize: 22,
        color: '#131D33',
    },
    exitText: {
        fontSize: 18,
        marginLeft: 6,
        color: '#131D33',
    },
    infoWrap: {
        position: 'absolute',
        width: 200,
        height: 60,
        bottom: 20,
    },
    infoText1: {
        fontSize: 22,
        color: '#F6B710',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoText2: {
        fontSize: 16,
        color: '#9BAA98',
        textAlign: 'center',
    }

});
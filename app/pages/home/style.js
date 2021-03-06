import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#131D33',
        height: '100%',
        width: '100%',
    },
    listWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flexWrap: 'wrap',
    },
    scanAllPlaceholder: {
        width: '100%',
        height: 40,
        backgroundColor: 'transparent',
    }
});
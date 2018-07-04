import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin:0
    },
    active: {
        color: '#fff',
        width:'20%',
        fontWeight: 'bold',
        backgroundColor:'#FF7284',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        padding:10,
        fontSize: 12
    },

    nonactive: {
        color: '#111',
        width:'20%',
        height: 50,
        fontSize: 12,
        padding:10,
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;

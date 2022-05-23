import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    card: {
        height: height / 9,
        width: '90%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        padding: height / 50,

        borderRadius: 15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    viewImag: {
        width: width / 6,
        height: height / 12,
        borderRadius: (width / 6 + height / 12) / 2,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    details: {
        marginLeft: '6%'
    },
    fullName: {
        color: '#1f2937',
        fontSize: 24,
        fontWeight: '600',
    },
    city: {
        color: 'grey',
        fontSize: 15
    },
    image:{
        width: width / 7,
        height: height / 12,
        resizeMode: 'contain'
    }
});
export default styles;
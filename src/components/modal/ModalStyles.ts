import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    cardModal: {
        height: height / 2,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: height / 20,
        marginTop: '40%',

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
    viewImage: {
        width: width / 2.2,
        height: height / 4.5,
        borderRadius: (width / 2.2 + height / 4.5) / 2,
        backgroundColor: '#5eead4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullName: {
        fontSize: 20,
        fontWeight: "600",
        color: '#1f2937',
        marginTop: '5%'
    },
    email: {
        fontSize: 14,
        color: 'grey',
        marginTop: '3%'
    },
    ViewLocations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '6%',
    },
    city: {
        paddingVertical: '1%',
        paddingHorizontal: '3%',
        borderRadius: 15,
        color: '#fff',
        marginRight: '3%',
    },
    image: {
        width: width / 3,
        height: height / 6,
        borderRadius: (width / 3 + height / 6) / 2,
        resizeMode: 'contain'
    }
});
export default styles;
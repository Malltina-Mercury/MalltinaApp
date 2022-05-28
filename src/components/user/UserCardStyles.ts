import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  card: {
    height: height / 9,
    width: width/1.2,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: height / 50,
    marginBottom: height/70,

    borderRadius: height/70,
    backgroundColor: '#fff',
    shadowColor: '#000',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    marginLeft: width/25,
  },
  fullName: {
    textAlign: 'left',
    color: '#1f2937',
    fontSize: 20,
    fontWeight: '600',
  },
  city: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 14,
  },
  image: {
    width: width / 7,
    height: height / 14,
    borderRadius: (width / 7 + height / 14) / 2,
    resizeMode: 'contain',
  },
});
export default styles;

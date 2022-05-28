import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  viewModal: {
    backgroundColor: '#ffffffeb',
    height: height,
    width: width
  },
  cardModal: {
    height: height / 2,
    width: width / 1.1,
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: height / 60,
    paddingBottom: height / 20,
    marginTop: height / 5,

    borderRadius: height / 70,
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
  viewImage: {
    width: width / 2.2,
    height: height / 4.5,
    borderRadius: (width / 2.2 + height / 4.5) / 2,
    backgroundColor: '#fbbf24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: height / 60,
  },
  viewEmail: {
    flexDirection: 'row',
    marginTop: height / 90,
    alignItems: 'center'
  },
  email: {
    fontSize: 14,
    color: 'grey',
    paddingLeft: width / 60,
  },
  ViewLocations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height / 30,
  },
  city: {
    fontSize: 16,
    paddingVertical: height / 190,
    paddingHorizontal: width / 35,
    borderRadius: 15,
    color: '#fff',
    marginRight: width / 40,
    borderWidth: 2,
  },
  image: {
    width: width / 3,
    height: height / 6,
    borderRadius: (width / 3 + height / 6) / 2,
    resizeMode: 'contain',
  },
  iconClose: {
    alignSelf: 'flex-end',
    marginRight: width / 20
  },
});
export default styles;

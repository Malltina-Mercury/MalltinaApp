import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  card: {
    height: height / 9,
    width: '90%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: height / 50,
    marginBottom: '3%',

    borderRadius: 15,
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
  details: {
    marginLeft: '6%',
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
});
export default styles;

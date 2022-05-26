import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardSearch: {
    width: '90%',
    alignSelf: 'center',
    height: height / 15,
    margin: height / 35,
    borderBottomWidth: 1,
    paddingLeft: '3%',
    borderBottomColor: '#fbbf24',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputText: {
    color: 'grey',
    fontSize: 15,
  },
});
export default styles;

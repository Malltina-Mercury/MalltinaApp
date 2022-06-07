import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

export default StyleSheet.create({
  container: {
    marginLeft: 8,
  },
  title: {
    textAlign: 'left',
    color: colors.slate['800'],
    fontSize: 16,
    fontWeight: '400',
  },
  subTitle: {
    textAlign: 'left',
    color: colors.slate['600'],
    fontSize: 12,
    fontWeight: '200',
  },
});

import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.yellow['500'],
    borderBottomWidth: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  input: {
    height: 48,
    flex: 1,
    color: colors.slate['800'],
    fontSize: 16,
  },
  icon: {
    width: 48,
    height: 48,
    fontSize: 32,
    color: colors.yellow['500'],
    display: 'flex',
    padding: 8,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: colors.white,
    shadowColor: colors.slate['600'],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 15,
  },
});
export default styles;

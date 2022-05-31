import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: `${colors.slate['500']}80`,
    padding: 16,
  },
  container: {
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
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
  fullName: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: colors.slate['800'],
  },
  viewEmail: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  email: {
    fontSize: 14,
    fontWeight: '200',
    color: colors.slate['600'],
    paddingLeft: 8,
  },
  ViewLocations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height / 30,
  },
  city: {
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginRight: 8,
    borderWidth: 2,
  },
  dismissIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 24,
    color: colors.slate['600'],
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {createTheme} from 'react-native-whirlwind';
import {colors} from './colors';

const t = StyleSheet.create({
  ...createTheme({
    colors: colors,
    fontFamilies: {
      sans: 'Poppins-Regular',
      sansMedium: 'Poppins-Medium',
      sansBold: 'Poppins-Bold',
    },
  }),
  shadowMd: {
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 15,
    elevation: 7.5,
  },
});

export default t;

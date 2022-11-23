import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const SIZES = {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
};

const COLORS = {
  light: {
    primary: '#1E8449',
    backgroundColor: '#E8F8F5',
    third: '#D1F2EB',
    secondary: '#547460',
    red: '#A93226',
    white: '#F4F6F7',
    backgroundColor1: '#096923',
  },
  dark: {
    primary: '#D1F2EB',
    backgroundColor: '#353A36',
    backgroundColor1: '#435446',
    secondary: '#8CA495',
    third: '#239B56',
    red: '#A93226',
    white: '#F4F6F7',
  },
};

export {SIZES, COLORS};

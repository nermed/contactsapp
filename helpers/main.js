import {Appearance, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../stores/reducers/themeMode';

const useIsLightMode = () => {
  const themeMode = useSelector(state => state.themeMode.mode);
  return themeMode === 'light';
};

const useInitHelper = () => {
  const dispatch = useDispatch();
  const colorScheme = Appearance.getColorScheme();
  dispatch(changeTheme(colorScheme));
  return;
};

export {useIsLightMode, useInitHelper};

const styles = StyleSheet.create({});

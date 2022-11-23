import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useIsLightMode} from '../helpers/main';
import {COLORS, SIZES} from '../constants';

const SettingsScreen = () => {
  const isLightMode = useIsLightMode();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isLightMode
          ? COLORS.light.backgroundColor
          : COLORS.dark.backgroundColor,
      }}>
      {/* <Text>SettingsScreen</Text> */}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    height: SIZES.SCREEN_HEIGHT,
  },
});

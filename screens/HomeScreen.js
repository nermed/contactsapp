import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {useIsLightMode} from '../helpers/main';
import ContactList from './ContactList';

const Home = () => {
  const isLightMode = useIsLightMode();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isLightMode
          ? COLORS.light.backgroundColor
          : COLORS.dark.backgroundColor,
      }}>
      <StatusBar style="auto" />
      <ContactList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: SIZES.SCREEN_HEIGHT,
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsLightMode} from '../helpers/main';
import {COLORS} from '../constants';

const AppHeaderRight = () => {
  const isLightMode = useIsLightMode();
  return (
    <TouchableOpacity onPress={() => console.log('heyy add')}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          color={isLightMode ? COLORS.light.white : COLORS.dark.primary}
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AppHeaderRight;

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});

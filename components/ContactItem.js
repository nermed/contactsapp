import {Appearance, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Badge, Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {useIsLightMode} from '../helpers/main';

const ContactItem = ({item}) => {
  const isLightMode = useIsLightMode();
  const navigation = useNavigation();
  useEffect(() => {}, []);

  return (
    <Card
      style={{
        ...styles.container,
        backgroundColor: isLightMode ? 'white' : COLORS.dark.backgroundColor1,
      }}
      mode="contained"
      onPress={() => navigation.navigate('ContactDetail', {contact: item})}>
      {/* <Card.Title title={item.name} titleStyle={styles.title} /> */}
      <View>
        <Text
          style={{
            ...styles.title,
            color: isLightMode ? COLORS.light.primary : COLORS.dark.primary,
          }}>
          {item.name}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.viewContent}>
          <Text
            style={{
              color: isLightMode
                ? COLORS.light.secondary
                : COLORS.dark.secondary,
            }}>
            {Array.isArray(item.phoneNumbers)
              ? item.phoneNumbers.length > 0
                ? item.phoneNumbers[0].number
                : ''
              : ''}
          </Text>
          <View style={styles.viewContent}>
            <Badge style={styles.badgeStyle}>
              <MaterialCommunityIcons
                size={20}
                name="message-arrow-right-outline"
                color={COLORS.light.red}
              />
              <Text
                style={{
                  color: isLightMode ? COLORS.light.red : COLORS.dark.red,
                  ...styles.badgeTexte,
                }}>
                10
              </Text>
            </Badge>
            <Badge style={styles.badgeStyle}>
              <MaterialCommunityIcons
                size={20}
                name="phone"
                color={COLORS.light.red}
              />
              <Text
                style={{
                  color: isLightMode ? COLORS.light.red : COLORS.dark.red,
                  ...styles.badgeTexte,
                }}>
                10
              </Text>
            </Badge>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 0.5,
    padding: 10,
  },
  title: {
    fontWeight: '800',
    marginBottom: 8,
    paddingBottom: 0,
  },
  cardContent: {
    // paddingTop: -5
  },
  badgeStyle: {
    backgroundColor: 'transparent',
    height: 20,
    marginRight: 5,
  },
  badgeTexte: {
    fontSize: 12,
  },
  viewContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

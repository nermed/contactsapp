import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {useIsLightMode} from '../helpers/main';

const ContactDetail = ({navigation, route}) => {
  const contact = route.params.contact;
  const isLightMode = useIsLightMode();
  // console.log(contact);
  return (
    <ScrollView
      style={{
        ...styles.container,
        backgroundColor: isLightMode
          ? COLORS.light.backgroundColor
          : COLORS.dark.backgroundColor,
      }}>
      <View
        style={{
          ...styles.banner,
          backgroundColor: isLightMode
            ? '#52BE80'
            : COLORS.dark.backgroundColor1,
        }}>
        <View style={{paddingLeft: 15}}>
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={COLORS.white}
              size={25}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.avatar1}/> */}
      </View>
      <View style={styles.viewAvatar}>
        <Avatar.Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZtKaiU7kjzKBlnqvtLUL4_ITJqfmgCt1ng&usqp=CAU',
          }}
          size={100}
          style={{
            ...styles.avatar1,
            backgroundColor: isLightMode ? 'white' : COLORS.dark.third,
          }}
        />
      </View>
      <View style={styles.contactInfo}>
        <Text
          style={{
            ...styles.contactName,
            color: isLightMode ? COLORS.light.primary : COLORS.dark.primary,
          }}>
          {contact.name}
        </Text>
        <View
          style={{
            ...styles.phoneNumbers,
            backgroundColor: isLightMode ? 'white' : COLORS.dark.third,
          }}>
          <View
            style={{
              ...styles.phoneNumber,
            }}>
            <Text>{contact.phoneNumbers[0].number}</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              style={{marginLeft: 8}}
            />
          </View>
        </View>
        <View style={styles.options}>
          <View style={styles.optionDetail}>
            <Avatar.Icon
              icon="phone"
              size={40}
              color={isLightMode ? COLORS.light.primary : COLORS.dark.primary}
              style={styles.optionDetailIcon}
            />
            <Text
              style={{
                ...styles.optionDetailLabel,
                color: isLightMode
                  ? COLORS.light.secondary
                  : COLORS.dark.secondary,
              }}>
              Call
            </Text>
          </View>
          <View style={styles.optionDetail}>
            <Avatar.Icon
              icon="message"
              size={40}
              color={isLightMode ? COLORS.light.primary : COLORS.dark.primary}
              style={styles.optionDetailIcon}
            />
            <Text
              style={{
                ...styles.optionDetailLabel,
                color: isLightMode
                  ? COLORS.light.secondary
                  : COLORS.dark.secondary,
              }}>
              SMS
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    height: SIZES.SCREEN_HEIGHT,
    width: '100%',
  },
  banner: {
    height: 250,
    width: '100%',
    paddingTop: 30,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  avatar1: {
    // backgroundColor: 'white',
  },
  viewAvatar: {
    // backgroundColor: COLORS.light.backgroundColor,
    marginTop: -40,
    borderRadius: 60,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  contactInfo: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  contactName: {
    fontSize: 20,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: "red"
  },
  phoneNumbers: {
    display: 'flex',
    padding: 5,
    borderRadius: 10,
  },
  phoneNumber: {
    padding: 5,
    flexDirection: 'row',
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  optionDetail: {
    display: 'flex',
    alignItems: 'center',
    width: 80,
  },
  optionDetailLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  optionDetailIcon: {
    backgroundColor: 'transparent',
  },
});

// "preview": {
//   "distribution": "internal"
// },

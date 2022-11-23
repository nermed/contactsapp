import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Contacts from 'expo-contacts';
import {ContactItem} from '../components';
import {ProgressBar, Searchbar} from 'react-native-paper';
import {useIsLightMode} from '../helpers/main';
import {COLORS, SIZES} from '../constants';
import dataFund from './data';

const ContactList = () => {
  const [contacts, setContacts] = useState({dataRaw: [], dataPrint: []});
  const isLightMode = useIsLightMode();
  const [isLoading, setIsLoading] = useState({nextPage: true, isEmpty: false});

  useEffect(() => {
    (async () => {
      const {status} = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const {data, hasNextPage} = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS],
        });
        // if (data.length > 0) {
        //   setIsLoading({...isLoading, nextPage: false});
        //   data.slice(0, 10).forEach(e => {
        //     console.log(e);
        //   });
        //   setContacts({dataRaw: data, dataPrint: data});
        // }
        setContacts({dataRaw: dataFund, dataPrint: dataFund});
        setInterval(() => {
          setIsLoading({...isLoading, nextPage: false});
          clearInterval();
        }, 2000);
      }
    })();
  }, []);

  const onChange = e => {
    if (e) {
      setContacts(prev => ({
        ...prev,
        dataPrint: contacts.dataPrint.filter(a => {
          return a.name.toString().toLowerCase().includes(e.toLowerCase())
            ? true
            : false;
        }),
      }));
    } else {
      setContacts(prev => ({...prev, dataPrint: contacts.dataRaw}));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewSearchBar}>
        <Searchbar
          placeholder="Search by name or number"
          placeholderTextColor="#9C9C9C"
          elevation={2}
          onChangeText={text => onChange(text)}
          inputStyle={styles.inputStyle}
          style={{
            ...styles.searchBar,
            backgroundColor: isLightMode
              ? 'transparent'
              : COLORS.dark.backgroundColor1,
          }}
        />
      </View>
      <ScrollView
        indicatorStyle={
          isLightMode ? COLORS.light.primary : COLORS.dark.primary
        }>
        {contacts.dataPrint.length > 0 ? (
          <>
            {contacts.dataPrint.map((item, index) => (
              <ContactItem item={item} key={index} />
            ))}

            <View style={{height: 180}} />
          </>
        ) : (
          <>
            {isLoading.nextPage ? (
              <ActivityIndicator
                size={50}
                color={isLightMode ? COLORS.light.primary : COLORS.dark.primary}
              />
            ) : null}
            <View style={{...styles.emptyData}}>
              <Text style={{...styles.emptyMessage}}>No contact found</Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: SIZES.SCREEN_HEIGHT,
  },
  viewSearchBar: {
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  searchBar: {
    width: '100%',
  },
  inputStyle: {
    fontSize: 14,
  },
  btn_search: {
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    right: 10,
  },
  emptyData: {
    display: 'flex',
    alignSelf: 'center',
  },
  emptyMessage: {
    fontSize: 30,
  },
});

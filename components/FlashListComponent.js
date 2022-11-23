import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import ContactItem from './ContactItem';

const FlashListComponent = ({data}) => {
  const renderItem = ({item}) => {
    return <ContactItem item={item} />;
  };
  return (
    <FlashList
      style={{marginTop: 5}}
      data={data}
      renderItem={renderItem}
      estimatedItemSize={1000}
      // keyExtractor={(_, indx) => indx.toString()}
    />
  );
};

export default FlashListComponent;

const styles = StyleSheet.create({});

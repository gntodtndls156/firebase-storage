import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Imageuploader from './Imageuploader';
import ImageView from './Imageview';
export default function App() {
  return (
    <View style={styles.container}>
      <Imageuploader />
      <ImageView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

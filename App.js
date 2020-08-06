import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Imageuploader from './Imageuploader';
import ImageView from './Imageview';

// 작업
import * as MailComposer from 'expo-mail-composer'

async function sendEmailAsync() {
  let result = await MailComposer.composeAsync({
    recipients: ['gntodtndls156@gmail.com'],
    subject: "제목",
    body: "사용하시는 기종이 무엇입니까? \n무슨 일입니까?"
  })

  Alert.alert(result.status);
}

// -------------

export default function App() {
  return (
    <View style={styles.container}>
      <Imageuploader />
      <ImageView />
      <Button title="Send Email" onPress={sendEmailAsync} />
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

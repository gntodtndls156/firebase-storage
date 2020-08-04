import * as React from 'react';
import { Button, Image, View, Alert } from 'react-native';


import * as ImagePicker from 'expo-image-picker'; // expo install expo-image-picker

// import './firebaseconfig';
const firebaseconfig = {
    apiKey: "AIzaSyCGC87HzjlY3QJi9iqSFy4JFiwW9zs__7w",
    authDomain: "storage-test-19633.firebaseapp.com",
    databaseURL: "https://storage-test-19633.firebaseio.com",
    projectId: "storage-test-19633",
    storageBucket: "storage-test-19633.appspot.com",
    messagingSenderId: "722044733458",
    appId: "1:722044733458:web:bcb50cfd8b98843e0eb0cb"
  }
  
  import firebase from 'firebase';
  // const storage = firebase.storage();
  // const sotrageRef = firebase.storage().ref();
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
  }

export default class FirebaseToImage extends React.Component {
    // ChooseImage()
    onChooseImagePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            this.uploadImage(result.uri, "test-image")
            .then(() => {
                Alert.alert("성공!");
            }).catch ((error) => {
                console.log(error);
            });
        }
    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("test/" + imageName);
        var imageName = this.imageName;
        return ref.put(blob);
    }

    // ------------------------------
    render() {
        return (
            <Button title="Choose Image" onPress={this.onChooseImagePress} />
        );
    }
}
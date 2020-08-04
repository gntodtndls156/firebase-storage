import * as React from 'react';
import { Image } from 'react-native';

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

export default class ImageView extends React.Component {
    constructor () {
        super()
        this.state = {
            'test-image': ''
        }

        this.getImage('test-image');
    }

    getImage(image) {
        let { state } = this
        imageName = "test-image"
        firebase.storage().ref().child("test/" + imageName).getDownloadURL().then((url) => {
            state[image] = url
            this.setState({ 'test-image' : url });
        console.log(typeof(url));
        })
    }
    // -----------------------------------
    render() {
        return (
            <Image source={this.state["test-image"]} style={{height:300, width:400}}  />
        );
    }
}
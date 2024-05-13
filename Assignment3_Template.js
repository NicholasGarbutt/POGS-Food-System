import React from "react";
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading1}>POGS</Text>
      <Image source={require('./placeholder.png')} style={styles.image} />



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  heading1: {
    textAlign: "center",
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  image: {
    marginTop: 25,
    width: 250, 
    height: 250, 
  },


});

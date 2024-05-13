import React, { useState } from 'react'; 
import { SafeAreaView, StyleSheet, Text, Image,View } from 'react-native';
import {Picker} from '@react-native-picker/picker';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading1}>POGS</Text>
      <Image source={require('./placeholder.png')} style={styles.image} />



        <View style={styles.row2}>
        <Picker style={styles.picker1}>
            <Picker.Item label="CELERY-$2" values="CELERY-$2" />
            <Picker.Item label="CARROT-$5" values="CARROT-$5" />
            <Picker.Item label="BROCCOLI-$3" values="BROCCOLI-$3" />
            <Picker.Item label="LETTUCE-$2" values="LETTUCE-$2" />
            <Picker.Item label="POTATO-$4" values="POTATO-$4" />
        </Picker>
        
      </View>

      <Text style={styles.footer}>Developed by Nicholas, Alex, Tyson, Anthony</Text>

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
  row2:{
    flex:1,
    marginTop: 25,
    width: 1500, 
    height: 1500,
     
  },
footer: {
  marginTop: 25,
  textAlign: "center",
    fontSize: 24, 
    fontWeight: 'bold'
}

});

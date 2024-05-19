// Version 48.0.0 Andriod Pixel 4

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  let [selVeg, setselVeg] = useState("");
  let [selFruit, setselFruit] = useState("");

  let [QuanVeg, setQuanVeg] = useState(1);
  let [QuanFruit, setQuanFruit] = useState(1);

  let [totalPrice, setTotalPrice] = useState(0);

  let calculateTotalPrice = () => {
    let vegPrices = {
      "CELERY-$2": 2,
      "CARROT-$5": 5,
      "BROCCOLI-$3": 3,
      "LETTUCE-$2": 2,
      "POTATO-$4": 4
    };

    let fruitPrices = {
      "RASPBERRY-$14": 14,
      "APPLE-$15": 15,
      "BANANA-$16": 16,
      "TOMATO-$14": 14,
      "WATERMELON-$15": 15,
    };

    let selVegPrice = vegPrices[selVeg] || 0 ;
    let selFruitPrice = fruitPrices[selFruit] || 0;

    setTotalPrice ((selVegPrice * QuanVeg) + (selFruitPrice * QuanFruit));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading1}>POGS</Text>
      <Image source={require('./placeholder.png')} style={styles.image} />

      <View style={styles.row2}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selVeg}
            onValueChange={(itemValue) => setselVeg(itemValue)}
          >
            <Picker.Item label="Select Vegetable" value="" />
            <Picker.Item label="CELERY-$2" value="CELERY-$2" />
            <Picker.Item label="CARROT-$5" value="CARROT-$5" />
            <Picker.Item label="BROCCOLI-$3" value="BROCCOLI-$3" />
            <Picker.Item label="LETTUCE-$2" value="LETTUCE-$2" />
            <Picker.Item label="POTATO-$4" value="POTATO-$4" />
          </Picker>
          <Picker
            style={styles.quantityPicker}
            selectedValue={QuanVeg}
            onValueChange={(itemValue) => setQuanVeg(itemValue)}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
          </Picker>
        </View>
        
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selFruit}
            onValueChange={(itemValue) => setselFruit(itemValue)}
          >
            <Picker.Item label="Select Fruit" value="Select Fruit" />
            <Picker.Item label="RASPBERRY-$14" value="RASPBERRY-$14" />
            <Picker.Item label="APPLE-$15" value="APPLE-$15" />
            <Picker.Item label="BANANA-$16" value="BANANA-$16" />
            <Picker.Item label="TOMATO-$14" value="TOMATO-$14" />
            <Picker.Item label="WATERMELON-$15" value="WATERMELON-$15" />
          </Picker>
          <Picker
            style={styles.quantityPicker}
            selectedValue={QuanFruit}
            onValueChange={(itemValue) => setQuanFruit(itemValue)}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
          </Picker>
        </View>

        <Button title= "Calculate" onPress={calculateTotalPrice} />
      </View>

      <Text style={styles.totalPriceLabel}>Total Cost of Order: ${totalPrice}</Text>
      <Text style={styles.footer}>Developed by Nicholas, Alex, Tyson, Anthony</Text>

    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    padding: 20,
  },
  heading1: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f4f4f',
    marginVertical: 20,
  },
  image: {
    marginTop: 25,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#2f4f4f',
  },
  row2:{
    marginTop: 25,
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 18,
    color: '#4682b4',
  },
  totalPriceLabel: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff4500',
  },
  pickerContainer: {
    marginBottom: 20,
    backgroundColor: '#fffafa',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picker: {
    width: '100%',
  },
  quantityPicker: {
    width: '100%',
    marginTop: 10,
  },
});

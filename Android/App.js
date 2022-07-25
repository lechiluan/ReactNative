import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lê Chí Luân</Text>
      <Image source={require('./assets/link-icon-png-14.png')} style={styles.image}/>
      <StatusBar style="auto" />
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
  image: {
    width: 100,
    height: 100,
  }
});

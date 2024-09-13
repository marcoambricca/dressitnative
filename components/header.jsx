import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function Header({ navigation }) {
  const [fontsLoaded] = Font.useFonts({
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DressIt</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f2',
    width: '100%',
    height: 70, 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 14
  },
  backButton: {
    position: 'absolute',
    left: 10
  },
  backText: {
    fontSize: 16,
    color: 'blue'
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    backgroundColor: 'white',
    width: '100%',
    height: 60, // Increased height to provide more space for the title
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    position: 'relative', // To allow for absolute positioning of the back button
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24, // Larger font size
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    left: 10, // Position the back button on the left
  },
  backText: {
    fontSize: 16,
    color: 'blue', // You can adjust the color to match your theme
  },
});

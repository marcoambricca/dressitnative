import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/header.jsx';
import NavBar from '../../components/navbar.jsx';

export default function ProfileScreen({ route }) {
  const { id, titulo, backgroundImageUrl, precio } = route.params;  

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text>Profile</Text>
      </ScrollView>
      <NavBar />
    </View>
  );
}
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Navbar from '../../components/header.jsx';

export default function WearDetail({ route }) {
  const { id, titulo, backgroundImageUrl, precio } = route.params;

  return (
    <View style={styles.container}>
        <Navbar isHome={false}/>
        <Image source={{ uri: backgroundImageUrl }} style={styles.image} />
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.price}>${precio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
});
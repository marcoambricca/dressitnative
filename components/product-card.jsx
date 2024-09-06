import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function Producto({ backgroundImageUrl, precio, titulo, itemWidth, itemHeight }) {
  const imageHeight = itemHeight === 290 ? '78%' : '85%';
  
  const [fontsLoaded] = Font.useFonts({
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
  });

  return (
    <View style={[styles.product, { width: itemWidth, height: itemHeight }]}>
      <View style={[styles.productImg, {height: imageHeight}]}>
        <Image source={{ uri: backgroundImageUrl }} style={styles.image} />
        <Text style={styles.price}>${precio}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title} ellipsizeMode='tail'>{titulo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    marginHorizontal: 8,
    marginVertical: 4,
    fontFamily: 'Roboto',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 8,
    elevation: 3
  },
  productImg: {
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  price: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#EDE8D0',
    textAlign: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
    paddingHorizontal: 8,
    color: '#333'
  },
  titleContainer: {
    paddingVertical: 2
  }
});
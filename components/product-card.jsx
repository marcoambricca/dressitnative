import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const itemWidth = (width - 40) / 2;
const itemHeight = height / 3;

const Producto = ({ idcCreator, id, backgroundImageUrl, precio, titulo }) => {
    return (
        <View style={styles.producto}>
            <View style={styles.productoImg}>
                <Image source={{ uri: backgroundImageUrl }} style={styles.imagen} />
                <Text style={styles.precio}>${precio}</Text>
            </View>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    producto: {
      width: itemWidth,
      height: itemHeight,
      margin: 5,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    productoImg: {
      width: '100%',
      height: '80%', // Take up most of the container height
      position: 'relative',
    },
    imagen: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // Ensure image covers the space
    },
    precio: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      paddingVertical: 4,
      paddingHorizontal: 8,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: '#EDE8D0',
      textAlign: 'center',
      fontFamily: 'Roboto',
    },
    titulo: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: 16,
      marginVertical: 5,
      paddingHorizontal: 5,
    },
});

export default Producto;

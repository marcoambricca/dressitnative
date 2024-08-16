import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native';
import Producto from '../components/product-card.jsx';
import apiCall from '../api/api-fetch.js';
import Header from '../components/header.jsx';
import NavBar from '../components/navbar.jsx';

export default function HomeScreen({ navigation }) {
    const [prendas, setPrendas] = useState([]);
    const { width } = useWindowDimensions(); // Get screen width

    const baseItemWidth = 160; // Adjust the base width to allow more columns
    const numColumns = Math.floor(width / baseItemWidth); // Dynamically calculate the number of columns
    const itemWidth = width / numColumns - 16; // Calculate item width with some margin
    const itemHeight = numColumns > 1 ? 250 : 400; // Set item height based on the number of columns

    useEffect(() => {
        async function fetchWear() {
            const wear = await apiCall('wear');
            if (wear != undefined){
                setPrendas(wear);
            }
        }
        fetchWear();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.grid}>
                    {prendas.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                                navigation.navigate('WearDetail', {
                                    id: item.id,
                                    titulo: item.name,
                                    backgroundImageUrl: item.imgPath,
                                    precio: item.price,
                                })
                            }
                            style={{ width: itemWidth, marginBottom: 16 }} // Adjust margin between items
                        >
                            <Producto
                                backgroundImageUrl={item.imgPath}
                                precio={item.price}
                                titulo={item.name}
                                itemWidth={itemWidth}
                                itemHeight={itemHeight} // Pass the calculated item height
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <NavBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    scrollContainer: {
        padding: 8,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import * as Font from 'expo-font';
import Producto from '../components/product-card.jsx';
import apiCall from '../api/api-fetch.js';
import Navbar from '../components/header.jsx';

export default function HomeScreen({ navigation }) {
    const [prendas, setPrendas] = useState([]);
    const [loading, setLoading] = useState(true);
    const { width } = useWindowDimensions(); // Get screen width

    const numColumns = Math.floor(width / 180); // Dynamically calculate number of columns
    const itemWidth = width / numColumns - 16; // Calculate item width with some margin
    const itemHeight = numColumns > 1 ? 250 : 400; 

    const fetchFonts = async () => {
        await Font.loadAsync({
            'roboto-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
            'roboto-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
        });
    };

    useEffect(() => {
        async function fetchWear() {
            const wear = await apiCall('wear');
            await fetchFonts();
            setPrendas(wear);
            setLoading(false);
        }
        fetchWear();
    }, []);

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('WearDetail', { id: item.id, titulo: item.name, backgroundImageUrl: item.imgPath, precio: item.price })}>
            <Producto
                id={item.id}
                backgroundImageUrl={item.imgPath}
                precio={item.price}
                titulo={item.name}
                itemWidth={itemWidth}
                itemHeight={itemHeight} // Pass the calculated item width
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Navbar isHome={true} />
            <FlatList
                data={prendas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns} // Use dynamically calculated number of columns
                {...(numColumns > 1 && { columnWrapperStyle: styles.row })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        fontFamily: 'roboto-regular',
        padding: 0,
        margin: 0,
        width: '100%',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        justifyContent: 'space-between',
        marginVertical: 8,
    },
});

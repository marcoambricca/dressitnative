import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import apiCall from '../api/api-fetch.js';
import ProductList from '../components/product-list.jsx';
import Header from '../components/header.jsx';
import NavBar from '../components/navbar.jsx';

export default function HomeScreen({ navigation }) {
    const [prendas, setPrendas] = useState([]);

    useEffect(() => {
        async function fetchWear() {
            const wear = await apiCall('wear');
            if (wear !== undefined) {
                setPrendas(wear);
            }
        }
        fetchWear();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ProductList navigation={navigation} array={prendas} />
            <NavBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    }
});
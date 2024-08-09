import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Producto from '../components/product-card.jsx';
import apiCall from '../api/api-fetch.js';
import Navbar from '../components/header.jsx';
import { ScrollView } from 'react-native-web';

export default function HomeScreen({ navigation }) {
    const [prendas, setPrendas] = useState([]);
    const [loading, setLoading] = useState(true);

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
        />
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <Navbar isHome={true}/>
        <ScrollView>
            <FlatList
            data={prendas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            />
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      fontFamily: 'roboto-regular',
      padding: 0,
      margin: 0
    },
    loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Producto from '../components/product-card.jsx';
import apiCall from '../api/api-fetch.js';
import { AppLoading } from 'expo';

export default function App() {
  const [prendas, setPrendas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFonts = () => {
    return Font.loadAsync({
      'roboto-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      'roboto-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf')
    });
  };

  useEffect(() => {
    async function fetchWear() {
      const wear = await apiCall('wear');
      console.log(wear);
      setPrendas(wear);
      setLoading(false);
    }
    fetchWear();
  }, []);

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      ></AppLoading>
    );
  }

  if (loading) {
    return (
      <View style={styles.centered}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Producto
      idCreator={item.idCreator}
      id={item.id}
      key={item.id}
      backgroundImageUrl={item.imgPath}
      precio={item.price}
      titulo={item.name}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={prendas}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      paddingHorizontal: 10,
      fontFamily: 'roboto-regular'
    }
});
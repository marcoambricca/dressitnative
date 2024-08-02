import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import Producto from '../components/product-card.jsx';

export default function App() {
  const [prendas, setPrendas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch(`https://localhost:3000/api/wear?offset=20&limit=40`)
          .then((response) => response.json())
          .then((json) => {
              setPrendas(json);
              setLoading(false);
              console.log(prendas)
          })
          .catch((error) => {
              console.log(error);
              setLoading(false);
          });
  }, []);

  if (loading) {
      return (
          <View style={styles.centered}>
              <ActivityIndicator size="large" color="#0000ff" />
          </View>
      );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {prendas.map(element => (
            <Producto idCreator = {element.idCreator} id={element.id}key={element.id} backgroundImageUrl={element.imgPath} precio={element.price} titulo={element.name} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

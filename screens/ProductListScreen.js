import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

// Sample product list
const products = [
  { name: 'Orange', price: '$2.99/KG', image: require('../assets/logo.png') },
  { name: 'Banana', price: '$1.99/KG', image: require('../assets/logo.png') },
  { name: 'Kiwi', price: '$1.50/KG', image: require('../assets/logo.png') },
  { name: 'Avocado', price: '$5.99/KG', image: require('../assets/logo.png') },
  { name: 'Lemon', price: '$1.20/KG', image: require('../assets/logo.png') },
  { name: 'Strawberry', price: '$3.90/KG', image: require('../assets/logo.png') },
];

const ProductsListScreen = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      {/* Product Image */}
      <Image source={item.image} style={styles.productImage} />
      
      {/* Product Info */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => navigation.navigate('ProductDetails', { product: item })}
      >
        <Text style={styles.addToCartText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fruits</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={renderProduct}
        numColumns={2} // Display two products per row
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5eb', // Light green background
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#28a745',
  },
  row: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '48%',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#6c757d',
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 20,
    color: 'white',
  },
});

export default ProductsListScreen;

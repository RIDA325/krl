import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Green Background */}
      <View style={styles.header}>
        <Text style={styles.locationText}>📍 Baridhara, Dhaka</Text>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Search Your Groceries</Text>
        </View>
      </View>

      {/* Promotional Banner */}
      <View style={styles.promoContainer}>
        <Text style={styles.promoText}>Get 40% discount on your first order from app.</Text>
        <TouchableOpacity style={styles.promoButton} onPress={() => navigation.navigate('ProductsList')}>
          <Text style={styles.promoButtonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Veggies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Fruits</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Meat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Dairy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Popular Products */}
      <View style={styles.popularProductsContainer}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <View style={styles.productRow}>
          <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetails', { product: { name: 'Orange', price: '$2.99/KG' } })}>
            <Image source={require('../assets/logo.png')} style={styles.productImage} />
            <Text style={styles.productName}>Orange</Text>
            <Text style={styles.productPrice}>$2.99/KG</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productItem}>
            <Image source={require('../assets/logo.png')} style={styles.productImage} />
            <Text style={styles.productName}>Banana</Text>
            <Text style={styles.productPrice}>$1.00/KG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28a745', // Same green background from the SignIn screen
  },
  header: {
    padding: 20,
    backgroundColor: '#28a745',
  },
  locationText: {
    color: 'white',
    fontSize: 16,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  searchText: {
    color: '#6c757d',
  },
  promoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  promoButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  promoButtonText: {
    color: 'white',
    fontSize: 16,
  },
  categoriesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  categoryText: {
    color: '#6c757d',
  },
  popularProductsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: '48%',
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#28a745',
  },
});

export default HomeScreen;


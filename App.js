import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens//SplashScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import ProductsListScreen from './screens/ProductListScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={({ navigation }) => ({
            title: '',
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={25} style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={({ navigation }) => ({
            title: '',
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={25} style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ProductsList" 
          component={ProductsListScreen} 
          options={{ title: 'Products' }} 
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailsScreen} 
          options={{ title: 'Product Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

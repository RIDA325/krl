import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // For social icons

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign in
  const handleSignIn = () => {
    // Here you can add authentication logic
    console.log('Sign In');
    // Navigate to Home screen
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#28a745' }}>
      {/* Green Background */}
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        {/* White Card Container */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Enter your email address and password to sign in</Text>

          <TextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Social Media Icons */}
          <Text style={styles.otherSignInText}>Other sign in options</Text>
          <View style={styles.socialIcons}>
            <FontAwesome name="facebook" size={30} color="#4267B2" />
            <FontAwesome name="google" size={30} color="#DB4437" />
            <FontAwesome name="apple" size={30} color="#000" />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  otherSignInText: {
    marginTop: 20,
    fontSize: 14,
    color: '#6c757d',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 10,
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;

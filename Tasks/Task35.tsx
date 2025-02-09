import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [countryError, setCountryError] = useState('');

  // Load saved data when the app starts
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        // Get the saved data from AsyncStorage
        const savedData = await AsyncStorage.getItem('userData');
        if (savedData) {
          const parsedData = JSON.parse(savedData);

          // Check if the saved data is less than one minute old
          const currentTime = new Date();
          const savedTime = new Date(parsedData.timestamp);
          const timeDifference = (currentTime.getTime() - savedTime.getTime()) / 1000;

          if (timeDifference < 60) {
            // Pre-fill the inputs with the saved data
            setName(parsedData.name);
            setAge(parsedData.age);
            setCountry(parsedData.country);
          } else {
            // Clear the saved data if it's older than one minute
            await AsyncStorage.removeItem('userData');
          }
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load saved data');
      }
    };

    loadSavedData();
  }, []);

  // Validate name (only letters)
  const validateName = (input: string) => {
    const lettersOnly = /^[A-Za-z]+$/;
    if (!input) {
      setNameError('Name is required');
    } else if (!lettersOnly.test(input)) {
      setNameError('Name should contain only letters');
    } else {
      setNameError('');
    }
    setName(input);
  };

  // Validate age (numeric, min 1, max 120)
  const validateAge = (input: string) => {
    const numbersOnly = /^[0-9]+$/;
    if (!input) {
      setAgeError('Age is required');
    } else if (!numbersOnly.test(input)) {
      setAgeError('Age should contain only numbers');
    } else if (parseInt(input, 10) < 1 || parseInt(input, 10) > 120) {
      setAgeError('Age should be between 1 and 120');
    } else {
      setAgeError('');
    }
    setAge(input);
  };

  // Validate country (only letters)
  const validateCountry = (input: string) => {
    const lettersOnly = /^[A-Za-z]+$/;
    if (!input) {
      setCountryError('Country is required');
    } else if (!lettersOnly.test(input)) {
      setCountryError('Country should contain only letters');
    } else {
      setCountryError('');
    }
    setCountry(input);
  };

  const handleSubmit = async () => {
    // Validate all fields before submitting
    validateName(name);
    validateAge(age);
    validateCountry(country);

    if (nameError || ageError || countryError || !name || !age || !country) {
      Alert.alert('Error', 'Please fix the errors before submitting.');
      return;
    }

    const userData = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(),
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Success', 'Data saved successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={validateName}
        placeholder="Enter your name"
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={validateAge}
        placeholder="Enter your age"
        keyboardType="numeric"
      />
      {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}

      <Text style={styles.label}>Country:</Text>
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={validateCountry}
        placeholder="Enter your country"
      />
      {countryError ? <Text style={styles.errorText}>{countryError}</Text> : null}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});
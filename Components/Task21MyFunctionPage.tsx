import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.classContainer}>
      <Text style={styles.classText}>This is MyFunctionPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  classContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'lightpink',
    borderRadius: 10,
  },
  classText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'crimson',
  },
});


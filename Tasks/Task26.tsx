import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

export const Task26 = () => {
  const [ipAddress, setIpAddress] = useState(''); // store the IP address
  const [isLoading, setIsLoading] = useState(false); // manage loading state

  // Non-blocking request using async/await
  const fetchIpNonBlocking = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      setIpAddress('Failed to fetch IP');
    } finally {
      setIsLoading(false);
    }
  };

  // Blocking request using Promise with .then() and .catch()
  const fetchIpBlocking = () => {
    setIsLoading(true);
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      })
      .catch(() => {
        setIpAddress('Failed to fetch IP');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your IP Address: {ipAddress}</Text>

      <Button title="Get IP (Non-Blocking)" onPress={fetchIpNonBlocking} />

      <Button title="Get IP (Blocking)" onPress={fetchIpBlocking} />

      {isLoading && <ActivityIndicator size="large" color="steelblue" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


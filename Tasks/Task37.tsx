import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';

const generateRandomWord = (length: number) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Task37 = () => {
  const [randomWords, setRandomWords] = useState(
    Array.from({ length: 100 }, () => generateRandomWord(5))
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    const newWords = Array.from({ length: 100 }, () => generateRandomWord(5));
    setRandomWords(newWords);

    // Stop refreshing after a short delay (simulate async operation)
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {randomWords.map((word, index) => (
        <Text key={index} style={styles.text}>
          {word}
        </Text>
      ))}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});
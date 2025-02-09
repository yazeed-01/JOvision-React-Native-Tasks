import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

// Function to generate a random word
const generateRandomWord = (length: number) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Task36 = () => {
  // Generate an array of 100 random words
  const randomWords = Array.from({ length: 100 }, () =>
    generateRandomWord(5) // Generate a random word of length 5
  );

  return (
    <ScrollView style={styles.container}>
      {randomWords.map((word, index) => (
        <Text key={index} style={styles.text}>
          {word}
        </Text>
      ))}
    </ScrollView>
  );
};

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

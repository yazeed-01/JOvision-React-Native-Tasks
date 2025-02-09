import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText: (newText: string) => {
      setText(newText);
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Child Text: {text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});


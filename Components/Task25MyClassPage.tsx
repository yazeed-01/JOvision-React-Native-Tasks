import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type MyClassPageRef = {
  updateText: (text: string) => void;
};

export const MyClassPage = forwardRef<MyClassPageRef, {}>((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText: (newText) => {
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


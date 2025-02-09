import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChildComponent } from '../Components/Task22MyFunctionPage';

export const Task22 = () => {
  const [text, setText] = useState('');

  const updateText = (newText: string) => {
    setText(newText);
  };

  return (
    <View>
      <Text style={styles.text}>Text from Parent: {text}</Text>
      <ChildComponent onTextChange={updateText} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


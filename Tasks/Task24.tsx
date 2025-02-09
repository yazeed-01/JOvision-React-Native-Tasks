import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {MyFunctionPage} from '../Components/Task24MyFunctionPage';

export const Task24 = () => {
  const [inputText, setInputText] = useState('');
  const myFunctionPageRef = useRef<{ updateText: (text: string) => void } | null>(null);

  const handleTextChange = (newText: string) => {
    setInputText(newText);
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        value={inputText}
        onChangeText={handleTextChange}
      />
      <MyFunctionPage ref={myFunctionPageRef} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
  },
});


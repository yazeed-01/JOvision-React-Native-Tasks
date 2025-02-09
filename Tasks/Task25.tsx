import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import  { MyClassPage , MyClassPageRef } from '../Components/Task25MyClassPage';

export const Task25 = () => {
  const [inputText, setInputText] = useState('');
  const myClassPageRef = useRef<MyClassPageRef | null>(null);

  const handleTextChange = (newText: string) => {
    setInputText(newText);
    if (myClassPageRef.current) {
      myClassPageRef.current.updateText(newText);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        value={inputText}
        onChangeText={handleTextChange}
      />
      <MyClassPage ref={myClassPageRef} />
    </View>
  );
};

const styles = StyleSheet.create({
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
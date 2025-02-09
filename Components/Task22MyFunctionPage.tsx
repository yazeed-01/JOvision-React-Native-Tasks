import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface ChildComponentProps {
  onTextChange: (text: string) => void;
}

export function ChildComponent(props: ChildComponentProps) {
  const { onTextChange } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        onChangeText={onTextChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


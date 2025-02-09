import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface ChildComponentProps {
  onTextChange: (text: string) => void;
}

export class ChildComponent extends Component<ChildComponentProps> {
  render() {
    const { onTextChange } = this.props;

    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          onChangeText={onTextChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


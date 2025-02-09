import React, { useState, useContext , ReactNode } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface TextContextType {
  text: string;
  setText: (text: string) => void;
}

const TextContext = React.createContext<TextContextType | undefined>(undefined);

//  Provider Component
const TextProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

// Component One - Class Component
class TextComponent extends React.Component {
  static contextType = TextContext;

  render() {
    const { text } = this.context as TextContextType;
    return <Text style={styles.text}>Shared Text: {text}</Text>;
  }
}

// Component Two - Functional Component
const InputComponent = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useContext must be used within a TextProvider');
  }
  const { text, setText } = context;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => setText(newText)}
        placeholder="Type something"
      />
      <TextComponent />
    </View>
  );
};

 export const Task38 = () => {
  return (
    <TextProvider>
      <View style={styles.container}>
        <InputComponent />
        <InputComponent />
        <InputComponent />
        <InputComponent />
      </View>
    </TextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});


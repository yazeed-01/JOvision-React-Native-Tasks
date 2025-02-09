import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const textSlice = createSlice({
  name: 'text',
  initialState: {
    text: '',
    isVisible: true, // Controls the visibility of ComponentOne
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { setText, toggleVisibility } = textSlice.actions;
const textReducer = textSlice.reducer;

// Configure Redux Store
const store = configureStore({
  reducer: {
    text: textReducer,
  },
});

const ComponentOne = () => {
  const dispatch = useDispatch();
  const textFromRedux = useSelector((state: { text: { text: string } }) => state.text.text); // Get text from Redux
  const [text, setTextLocal] = useState(textFromRedux); // Local state for TextInput

  // Sync local state with Redux when component unmounts
  useEffect(() => {
    return () => {
      dispatch(setText(text));
    };
  }, [dispatch, text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setTextLocal}
      />
    </View>
  );
};

const MainComponent = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: { text: { isVisible: boolean } }) => state.text.isVisible); // Get visibility state from Redux

  return (
    <View style={styles.container}>
      {isVisible && <ComponentOne />}
      <Button
        title={isVisible ? 'Hide Component' : 'Show Component'}
        onPress={() => dispatch(toggleVisibility())}
      />
    </View>
  );
};

export const Task39 = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
});
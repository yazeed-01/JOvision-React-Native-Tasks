// Task40.js
import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, connect } from 'react-redux';

// Step 1: Create Redux Slice
const textSlice = createSlice({
  name: 'text',
  initialState: {
    text: '', // Stores the text input value
    isVisible: true, // Controls the visibility of ComponentOne
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload; // Ensure payload is serializable
    },
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible; // No payload needed
    },
  },
});

export const { setText, toggleVisibility } = textSlice.actions;
const textReducer = textSlice.reducer;

// Step 2: Configure Redux Store
const store = configureStore({
  reducer: {
    text: textReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable values in actions
        ignoredActions: ['text/setText', 'text/toggleVisibility'],
        ignoredPaths: ['payload'], // Ignore payload for specific actions
      },
    }),
});

// Step 3: ComponentOne (Class Component)
interface ComponentOneState {
  text: string;
}

class ComponentOne extends Component<any, ComponentOneState> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: props.text || '', // Initialize local state with Redux text
    };
  }

  // Sync local state with Redux when component unmounts
  componentWillUnmount() {
    this.props.setText(this.state.text); // Pass only serializable data
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    );
  }
}

// Map Redux state to ComponentOne props
const mapStateToProps = (state: { text: { text: string } }) => ({
  text: state.text.text,
});

// Map Redux actions to ComponentOne props
const mapDispatchToProps = {
  setText,
};

// Connect ComponentOne to Redux
const ConnectedComponentOne = connect(mapStateToProps, mapDispatchToProps)(ComponentOne);

// Step 4: MainComponent (Class Component)
interface MainComponentProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

class MainComponent extends Component<MainComponentProps> {
  render() {
    const { isVisible, toggleVisibility: handleToggleVisibility } = this.props;

    return (
      <View style={styles.container}>
        {isVisible && <ConnectedComponentOne />}
        <Button
          title={isVisible ? 'Hide Component' : 'Show Component'}
          onPress={handleToggleVisibility} // No non-serializable data passed
        />
      </View>
    );
  }
}

// Map Redux state to MainComponent props
const mapMainStateToProps = (state: { text: { isVisible: boolean } }) => ({
  isVisible: state.text.isVisible,
});

// Map Redux actions to MainComponent props
const mapMainDispatchToProps = {
  toggleVisibility,
};

// Connect MainComponent to Redux
const ConnectedMainComponent = connect(mapMainStateToProps, mapMainDispatchToProps)(MainComponent);

// Step 5: Task40 Component
export const Task40 = () => {
  return (
    <Provider store={store}>
      <ConnectedMainComponent />
    </Provider>
  );
};

// Styles
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
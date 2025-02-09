import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChildComponent } from '../Components/Task22MyFunctionPage';

interface Task23State {
  text: string;
}

export class Task23 extends Component<{}, Task23State> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (newText: string) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>Text from Parent: {this.state.text}</Text>
        <ChildComponent onTextChange={this.updateText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


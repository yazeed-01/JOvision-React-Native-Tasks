import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class ClassPage extends Component {
  render() {
    return (
      <View style={styles.classContainer}>
        <Text style={styles.classText}>Class Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  classContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  classText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'steelblue',
  },
});

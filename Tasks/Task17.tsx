import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Task17 = () => {
  const [isVisible, setIsVisible] = useState(false);
  var Name = 'Yazeed';

  const ClickHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <Button title={isVisible ? 'Hide' : 'Show'} onPress={ClickHandler} />
      {isVisible && <Text style={styles.nameText}>{Name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  nameText: {
    marginTop: 20,
    fontSize: 55,
    fontWeight: 'bold',
    color: 'steelblue',
  },
});
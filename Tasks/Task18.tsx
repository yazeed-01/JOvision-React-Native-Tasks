import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const Task18 = () => {
  const [isLoading, setIsLoading] = useState(true);
  var Name = 'Yazeed';

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <View>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="steelblue" />
          <Text>Loading</Text>
        </View>
            ) : ( <Text style={styles.nameText}>{Name}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'steelblue',
  },
});
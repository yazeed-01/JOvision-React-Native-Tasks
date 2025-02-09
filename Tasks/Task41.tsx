import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Screen1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Screen 1</Text>
      <Text style={styles.subText}>This is the first screen of the app</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Screen 2</Text>
      <Text style={styles.subText}>You are now viewing the second screen</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Greetings from Screen 3</Text>
      <Text style={styles.subText}>This is the third screen of the app</Text>
    </View>
  );
}

function Screen4() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You've reached Screen 4</Text>
      <Text style={styles.subText}>This is the final screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato', // active tab color
          tabBarInactiveTintColor: 'gray', // inactive tab color
        }}
      >
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{ tabBarLabel: 'Screen 1' }} 
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{ tabBarLabel: 'Screen 2' }}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{ tabBarLabel: 'Screen 3' }} 
        />
        <Tab.Screen
          name="Screen4"
          component={Screen4}
          options={{ tabBarLabel: 'Screen 4' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
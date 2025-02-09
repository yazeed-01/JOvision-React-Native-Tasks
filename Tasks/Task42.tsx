import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type RootTabParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};

type Screen1NavigationProp = BottomTabNavigationProp<RootTabParamList, 'Screen1'>;
type Screen2NavigationProp = BottomTabNavigationProp<RootTabParamList, 'Screen2'>;
type Screen3NavigationProp = BottomTabNavigationProp<RootTabParamList, 'Screen3'>;
type Screen4NavigationProp = BottomTabNavigationProp<RootTabParamList, 'Screen4'>;

interface Screen1Props {
  navigation: Screen1NavigationProp;
}

interface Screen2Props {
  navigation: Screen2NavigationProp;
}

interface Screen3Props {
  navigation: Screen3NavigationProp;
}

interface Screen4Props {
  navigation: Screen4NavigationProp;
}

function Screen1({ navigation }: Screen1Props) {
  return (
    <View style={[styles.container, styles.screen1Container]}>
      <Text style={styles.text}>Welcome to Screen 1</Text>
      <Text style={styles.subText}>This is the first screen of the app</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('Screen4')}
      />
    </View>
  );
}

function Screen2({ navigation }: Screen2Props) {
  return (
    <View style={[styles.container, styles.screen2Container]}>
      <Text style={styles.text}>Hello from Screen 2</Text>
      <Text style={styles.subText}>You are now viewing the second screen</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('Screen4')}
      />
    </View>
  );
}

function Screen3({ navigation }: Screen3Props) {
  return (
    <View style={[styles.container, styles.screen3Container]}>
      <Text style={styles.text}>Greetings from Screen 3</Text>
      <Text style={styles.subText}>This is the third screen of the app</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('Screen4')}
      />
    </View>
  );
}

function Screen4({ navigation }: Screen4Props) {
  return (
    <View style={[styles.container, styles.screen4Container]}>
      <Text style={styles.text}>You reached Screen 4</Text>
      <Text style={styles.subText}>This is the final screen</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();

export function Task42() {
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
  screen1Container: {
    backgroundColor: '#FFCCCB',
  },
  screen2Container: {
    backgroundColor: '#ADD8E6',
  },
  screen3Container: {
    backgroundColor: '#90EE90',
  },
  screen4Container: {
    backgroundColor: '#FFD700',
  },
});
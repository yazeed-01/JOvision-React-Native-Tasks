import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Custom Hook
const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};

export const Task34 = () => {
  const [showTime, setShowTime] = useState(true);
  const currentTime = useCurrentTime();

  // Format the time and date
  const timeString = currentTime.toLocaleTimeString();
  const dateString = currentTime.toLocaleDateString();

  return (
    <View style={styles.container}>
      <Button
        title={showTime ? 'Hide Time' : 'Show Time'}
        onPress={() => setShowTime((prev) => !prev)}
      />
      {showTime && (
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>Current Time: {timeString}</Text>
          <Text style={styles.dateText}>Current Date: {dateString}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  timeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 18,
    marginTop: 10,
  },
});


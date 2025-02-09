import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

export const Task32 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <LinearGradient
      colors={['#000000', '#434343']}
      style={styles.container}
    >
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../Resources/Videos/video2.mp4')}
          style={styles.video}
          paused={!isPlaying}
          resizeMode="cover"
          posterResizeMode="cover"
          // Removed onTouchStart to prevent toggling button visibility
        />
      </View>

      {/* Always visible play/pause button */}
      <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
        <Text style={styles.controlText}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '50%',
    height: 600,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controlButton: {
    marginTop: 20, // Add margin to position the button below the video
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  controlText: {
    color: 'white',
    fontSize: 16,
  },
});
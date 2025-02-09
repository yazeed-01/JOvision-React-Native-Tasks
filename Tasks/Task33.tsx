import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

export const Task33 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Handle video press (play/pause)
  const handleVideoPress = () => {
    togglePlayPause();
  };

  return (
    <LinearGradient
      colors={['#000000', '#434343']}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={handleVideoPress}
        activeOpacity={1} // Ensure the touchable doesn't change opacity on press
      >
        <Video
          ref={videoRef}
          source={require('../Resources/Videos/video2.mp4')}
          style={styles.video}
          paused={!isPlaying}
          resizeMode="cover"
          poster={require('../Resources/Images/poster2.jpg')} // Add poster image
          posterResizeMode="cover"
          controls={false} // Disable native controls
        />
      </TouchableOpacity>

      {/* Play/Pause button in the middle of the screen */}
      {!isPlaying && (
        <TouchableOpacity
          style={styles.playButton}
          onPress={togglePlayPause}
        >
          <Text style={styles.playButtonText}>▶</Text>
        </TouchableOpacity>
      )}
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
    width: Dimensions.get('window').width * 0.9, // 90% of screen width
    height: Dimensions.get('window').height * 0.5, // 50% of screen height
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }], // Center the button
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: 'white',
    fontSize: 24,
  },
});
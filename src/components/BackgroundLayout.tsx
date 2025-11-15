import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export function BackgroundLayout({ children }: BackgroundLayoutProps) {
  const blob1X = useRef(new Animated.Value(0)).current;
  const blob1Y = useRef(new Animated.Value(0)).current;
  const blob2X = useRef(new Animated.Value(0)).current;
  const blob2Y = useRef(new Animated.Value(0)).current;
  const blob3X = useRef(new Animated.Value(0)).current;
  const blob3Y = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const blob1AnimX = Animated.loop(
      Animated.sequence([
        Animated.timing(blob1X, {
          toValue: 50,
          duration: 8000,
          useNativeDriver: true,
        }),
        Animated.timing(blob1X, {
          toValue: -50,
          duration: 8000,
          useNativeDriver: true,
        }),
      ])
    );

    const blob1AnimY = Animated.loop(
      Animated.sequence([
        Animated.timing(blob1Y, {
          toValue: 30,
          duration: 6000,
          useNativeDriver: true,
        }),
        Animated.timing(blob1Y, {
          toValue: -30,
          duration: 6000,
          useNativeDriver: true,
        }),
      ])
    );

    const blob2AnimX = Animated.loop(
      Animated.sequence([
        Animated.timing(blob2X, {
          toValue: -60,
          duration: 10000,
          useNativeDriver: true,
        }),
        Animated.timing(blob2X, {
          toValue: 60,
          duration: 10000,
          useNativeDriver: true,
        }),
      ])
    );

    const blob2AnimY = Animated.loop(
      Animated.sequence([
        Animated.timing(blob2Y, {
          toValue: -40,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(blob2Y, {
          toValue: 40,
          duration: 7000,
          useNativeDriver: true,
        }),
      ])
    );

    const blob3AnimX = Animated.loop(
      Animated.sequence([
        Animated.timing(blob3X, {
          toValue: 40,
          duration: 9000,
          useNativeDriver: true,
        }),
        Animated.timing(blob3X, {
          toValue: -40,
          duration: 9000,
          useNativeDriver: true,
        }),
      ])
    );

    const blob3AnimY = Animated.loop(
      Animated.sequence([
        Animated.timing(blob3Y, {
          toValue: 50,
          duration: 8500,
          useNativeDriver: true,
        }),
        Animated.timing(blob3Y, {
          toValue: -50,
          duration: 8500,
          useNativeDriver: true,
        }),
      ])
    );

    blob1AnimX.start();
    blob1AnimY.start();
    blob2AnimX.start();
    blob2AnimY.start();
    blob3AnimX.start();
    blob3AnimY.start();

    return () => {
      blob1AnimX.stop();
      blob1AnimY.stop();
      blob2AnimX.stop();
      blob2AnimY.stop();
      blob3AnimX.stop();
      blob3AnimY.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0A0F1C', '#1A1F2E', '#0F1419']}
        style={StyleSheet.absoluteFill}
      />

      <Animated.View
        style={[
          styles.blob,
          styles.blob1,
          {
            transform: [
              { translateX: blob1X },
              { translateY: blob1Y },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(100, 200, 255, 0.4)', 'rgba(150, 100, 255, 0.3)']}
          style={styles.blobGradient}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.blob,
          styles.blob2,
          {
            transform: [
              { translateX: blob2X },
              { translateY: blob2Y },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(255, 100, 200, 0.3)', 'rgba(200, 100, 255, 0.4)']}
          style={styles.blobGradient}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.blob,
          styles.blob3,
          {
            transform: [
              { translateX: blob3X },
              { translateY: blob3Y },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(100, 255, 200, 0.3)', 'rgba(100, 200, 255, 0.3)']}
          style={styles.blobGradient}
        />
      </Animated.View>

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blob: {
    position: 'absolute',
    borderRadius: 999,
  },
  blob1: {
    width: 300,
    height: 300,
    top: -100,
    left: -50,
  },
  blob2: {
    width: 350,
    height: 350,
    bottom: -120,
    right: -80,
  },
  blob3: {
    width: 250,
    height: 250,
    top: '40%',
    left: '50%',
    marginLeft: -125,
  },
  blobGradient: {
    flex: 1,
    borderRadius: 999,
  },
  content: {
    flex: 1,
  },
});

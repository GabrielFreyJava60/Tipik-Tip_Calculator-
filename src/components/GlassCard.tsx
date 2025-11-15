import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  intensity?: number;
}

export function GlassCard({ children, style, intensity = 40 }: GlassCardProps) {
  return (
    <View style={[styles.container, style]}>
      <BlurView intensity={intensity} tint="dark" style={styles.blur}>
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.15)',
            'rgba(255, 255, 255, 0.05)',
            'rgba(255, 255, 255, 0.1)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.content}>{children}</View>
        </LinearGradient>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  blur: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  gradient: {
    borderRadius: 24,
  },
  content: {
    padding: 20,
  },
});


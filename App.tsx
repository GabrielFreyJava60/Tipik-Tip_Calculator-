import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import './src/i18n';
import { BackgroundLayout } from './src/components/BackgroundLayout';
import { LanguageSelector } from './src/components/LanguageSelector';
import { CurrencySelector } from './src/components/CurrencySelector';
import { Calculator } from './src/components/Calculator';

export default function App() {
  const { t } = useTranslation();

  return (
    <GestureHandlerRootView style={styles.root}>
      <BackgroundLayout>
        <StatusBar style="light" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <Text style={styles.title}>{t('app_title')}</Text>
            </View>

            <View style={styles.content}>
              <LanguageSelector />
              <CurrencySelector />
              <Calculator />
            </View>
          </ScrollView>
        </SafeAreaView>
      </BackgroundLayout>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    paddingBottom: 40,
  },
});

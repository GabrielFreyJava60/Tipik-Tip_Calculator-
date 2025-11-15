import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppStore, Language } from '../store/useAppStore';
import { changeLanguage } from '../i18n';
import { GlassCard } from './GlassCard';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'he', label: 'עברית', flag: '🇮🇱' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export function LanguageSelector() {
  const { t } = useTranslation();
  const { language, setLanguage } = useAppStore();

  const handleLanguageChange = async (lang: Language) => {
    setLanguage(lang);
    await changeLanguage(lang);
  };

  return (
    <GlassCard style={styles.container}>
      <Text style={styles.label}>{t('language')}</Text>
      <View style={styles.options}>
        {LANGUAGES.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.option,
              language === lang.code && styles.optionActive,
            ]}
            onPress={() => handleLanguageChange(lang.code)}
            activeOpacity={0.7}
          >
            <Text style={styles.flag}>{lang.flag}</Text>
            <Text style={[
              styles.optionText,
              language === lang.code && styles.optionTextActive,
            ]}>
              {lang.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 12,
    fontWeight: '600',
  },
  options: {
    flexDirection: 'row',
    gap: 8,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  optionActive: {
    backgroundColor: 'rgba(100, 200, 255, 0.2)',
    borderColor: 'rgba(100, 200, 255, 0.5)',
  },
  flag: {
    fontSize: 20,
    marginRight: 6,
  },
  optionText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
    fontWeight: '500',
  },
  optionTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});


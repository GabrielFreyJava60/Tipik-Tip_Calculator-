import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppStore, Currency, CURRENCY_SYMBOLS } from '../store/useAppStore';
import { GlassCard } from './GlassCard';

const CURRENCIES: { code: Currency; label: string }[] = [
  { code: 'ILS', label: 'Shekel' },
  { code: 'USD', label: 'Dollar' },
  { code: 'EUR', label: 'Euro' },
];

export function CurrencySelector() {
  const { t } = useTranslation();
  const { currency, setCurrency } = useAppStore();

  return (
    <GlassCard style={styles.container}>
      <Text style={styles.label}>{t('currency')}</Text>
      <View style={styles.options}>
        {CURRENCIES.map((curr) => (
          <TouchableOpacity
            key={curr.code}
            style={[
              styles.option,
              currency === curr.code && styles.optionActive,
            ]}
            onPress={() => setCurrency(curr.code)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.symbol,
              currency === curr.code && styles.symbolActive,
            ]}>
              {CURRENCY_SYMBOLS[curr.code]}
            </Text>
            <Text style={[
              styles.optionText,
              currency === curr.code && styles.optionTextActive,
            ]}>
              {curr.label}
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
    alignItems: 'center',
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
  symbol: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  symbolActive: {
    color: '#FFFFFF',
  },
  optionText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    fontWeight: '500',
  },
  optionTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});


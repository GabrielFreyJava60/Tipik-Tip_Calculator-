import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  I18nManager,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppStore, CURRENCY_SYMBOLS } from '../store/useAppStore';
import { GlassCard } from './GlassCard';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const TIP_PRESETS = [10, 12, 15, 18, 20];

export function Calculator() {
  const { t } = useTranslation();
  const {
    currency,
    bill,
    setBillAmount,
    setTipPercentage,
    setNumberOfPeople,
    getTipAmount,
    getTotalAmount,
    getAmountPerPerson,
  } = useAppStore();

  const [customTip, setCustomTip] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const currencySymbol = CURRENCY_SYMBOLS[currency];
  const tipAmount = getTipAmount();
  const totalAmount = getTotalAmount();
  const perPerson = getAmountPerPerson();

  const isRTL = I18nManager.isRTL;

  const handleTipSelect = (percentage: number) => {
    setTipPercentage(percentage);
    setShowCustom(false);
    setCustomTip('');
  };

  const handleCustomTip = (value: string) => {
    setCustomTip(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
      setTipPercentage(parsed);
    }
  };

  return (
    <View style={styles.container}>
      <GlassCard>
        <Text style={styles.label}>{t('bill_amount')}</Text>
        <View style={styles.inputContainer}>
          {!isRTL && <Text style={styles.currencySymbol}>{currencySymbol}</Text>}
          <TextInput
            style={[styles.input, isRTL && styles.inputRTL]}
            value={bill.amount}
            onChangeText={setBillAmount}
            placeholder={t('enter_amount')}
            placeholderTextColor="rgba(255, 255, 255, 0.3)"
            keyboardType="decimal-pad"
          />
          {isRTL && <Text style={styles.currencySymbol}>{currencySymbol}</Text>}
        </View>
      </GlassCard>

      <GlassCard style={styles.section}>
        <Text style={styles.label}>{t('tip_percentage')}</Text>
        <View style={styles.tipOptions}>
          {TIP_PRESETS.map((tip) => (
            <TouchableOpacity
              key={tip}
              style={[
                styles.tipButton,
                bill.tipPercentage === tip && !showCustom && styles.tipButtonActive,
              ]}
              onPress={() => handleTipSelect(tip)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.tipButtonText,
                  bill.tipPercentage === tip && !showCustom && styles.tipButtonTextActive,
                ]}
              >
                {tip}%
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.tipButton, showCustom && styles.tipButtonActive]}
            onPress={() => setShowCustom(true)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tipButtonText,
                showCustom && styles.tipButtonTextActive,
              ]}
            >
              {t('custom_tip')}
            </Text>
          </TouchableOpacity>
        </View>

        {showCustom && (
          <View style={styles.customTipContainer}>
            <TextInput
              style={[styles.customTipInput, isRTL && styles.inputRTL]}
              value={customTip}
              onChangeText={handleCustomTip}
              placeholder="0-100"
              placeholderTextColor="rgba(255, 255, 255, 0.3)"
              keyboardType="decimal-pad"
            />
            <Text style={styles.percentSymbol}>%</Text>
          </View>
        )}
      </GlassCard>

      <GlassCard style={styles.section}>
        <Text style={styles.label}>{t('number_of_people')}</Text>
        <View style={styles.peopleContainer}>
          <TouchableOpacity
            style={styles.peopleButton}
            onPress={() => setNumberOfPeople(bill.numberOfPeople - 1)}
            activeOpacity={0.7}
          >
            <Text style={styles.peopleButtonText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.peopleCount}>{bill.numberOfPeople}</Text>
          <TouchableOpacity
            style={styles.peopleButton}
            onPress={() => setNumberOfPeople(bill.numberOfPeople + 1)}
            activeOpacity={0.7}
          >
            <Text style={styles.peopleButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </GlassCard>

      <View style={styles.resultsContainer}>
        <BlurView intensity={60} tint="dark" style={styles.resultsBlur}>
          <LinearGradient
            colors={[
              'rgba(100, 200, 255, 0.2)',
              'rgba(150, 100, 255, 0.15)',
              'rgba(100, 200, 255, 0.2)',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.resultsGradient}
          >
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>{t('tip_amount')}</Text>
              <Text style={styles.resultValue}>
                {currencySymbol} {tipAmount.toFixed(2)}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>{t('total_amount')}</Text>
              <Text style={[styles.resultValue, styles.resultValueLarge]}>
                {currencySymbol} {totalAmount.toFixed(2)}
              </Text>
            </View>

            {bill.numberOfPeople > 1 && (
              <>
                <View style={styles.divider} />
                <View style={styles.resultRow}>
                  <Text style={styles.resultLabel}>{t('per_person')}</Text>
                  <Text style={styles.resultValue}>
                    {currencySymbol} {perPerson.toFixed(2)}
                  </Text>
                </View>
              </>
            )}
          </LinearGradient>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginTop: 16,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 12,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  currencySymbol: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '600',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: '#FFFFFF',
    paddingVertical: 16,
    fontWeight: '600',
  },
  inputRTL: {
    textAlign: 'right',
  },
  tipOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tipButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  tipButtonActive: {
    backgroundColor: 'rgba(100, 200, 255, 0.3)',
    borderColor: 'rgba(100, 200, 255, 0.6)',
  },
  tipButtonText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 15,
    fontWeight: '600',
  },
  tipButtonTextActive: {
    color: '#FFFFFF',
  },
  customTipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  customTipInput: {
    flex: 1,
    fontSize: 20,
    color: '#FFFFFF',
    paddingVertical: 12,
    fontWeight: '600',
  },
  percentSymbol: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '600',
  },
  peopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  peopleButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(100, 200, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(100, 200, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  peopleButtonText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  peopleCount: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    minWidth: 60,
    textAlign: 'center',
  },
  resultsContainer: {
    marginTop: 24,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(100, 200, 255, 0.3)',
  },
  resultsBlur: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  resultsGradient: {
    padding: 24,
    borderRadius: 24,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  resultValue: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resultValueLarge: {
    fontSize: 28,
    color: '#64C8FF',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 16,
  },
});


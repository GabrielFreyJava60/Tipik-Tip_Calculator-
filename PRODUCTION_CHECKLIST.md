# ✅ Production Checklist

Перед публикацией в App Store убедитесь, что все пункты выполнены.

---

## 📋 Обязательные требования

### Apple Developer Account
- [ ] Зарегистрирован Apple Developer Account
- [ ] Оплачено $99/год
- [ ] Аккаунт активирован (1-2 дня)

### Bundle Identifier
- [ ] Bundle ID уникальный: `com.gabrielfrey.liquidtipcalculator`
- [ ] Bundle ID зарегистрирован в Apple Developer Portal
- [ ] Bundle ID совпадает в app.json и App Store Connect

### Версионирование
- [ ] `version`: "1.0.0" (в app.json)
- [ ] `buildNumber`: "1" (iOS в app.json)
- [ ] `versionCode`: 1 (Android в app.json)

---

## 🎨 Assets

### Иконки
- [ ] `icon.png` - 1024×1024 px ✅
- [ ] `adaptive-icon.png` - 1024×1024 px ✅
- [ ] `favicon.png` - 48×48 px ✅

### Splash Screen
- [ ] `splash.png` - 2048×2048 px ✅
- [ ] Правильный цвет фона (#0A0F1C) ✅

### Screenshots для App Store
- [ ] iPhone 6.7" (1290×2796) - минимум 3 скриншота
- [ ] iPhone 6.5" (1242×2688) - минимум 3 скриншота
- [ ] iPhone 5.5" (1242×2208) - минимум 3 скриншота
- [ ] iPad Pro 12.9" (опционально)

**Что показать на скриншотах:**
1. Главный экран с калькулятором
2. Выбор языка (EN/HE/RU)
3. Выбор валюты (₪/$/€)
4. Расчет чаевых с результатами
5. Разделение счета на людей

---

## 📝 App Store Connect

### Основная информация
- [ ] **App Name:** Liquid Tip Calculator
- [ ] **Subtitle:** Smart tip calculation with style
- [ ] **Primary Language:** English (US)
- [ ] **Category:** Finance (primary)
- [ ] **Secondary Category:** Utilities

### Описание
- [ ] Description написан ✅ (app-store-description.md)
- [ ] Promotional Text добавлен
- [ ] Keywords: tip calculator, bill splitter, gratuity, restaurant

### URLs
- [ ] **Privacy Policy URL:** https://yoursite.com/privacy ⚠️ СОЗДАТЬ
- [ ] **Support URL:** https://yoursite.com/support ⚠️ СОЗДАТЬ
- [ ] **Marketing URL:** (опционально)

### Pricing
- [ ] **Price:** Free (или установить цену)
- [ ] **Availability:** All countries

### Age Rating
- [ ] Заполнить опросник Age Rating
- [ ] Ожидаемый рейтинг: 4+

---

## 🔒 Privacy & Compliance

### Privacy Policy
- [ ] Privacy Policy создан ✅ (privacy-policy.md)
- [ ] Размещен на публичном URL ⚠️ НУЖНО
- [ ] Соответствует Apple требованиям

### App Privacy
- [ ] Заполнить App Privacy в App Store Connect
- [ ] Указать: "Does not collect data"
- [ ] Подтвердить все категории

### Export Compliance
- [ ] Ответить на вопросы Export Compliance
- [ ] Для калькулятора обычно: "No"

---

## 🛠 Technical

### EAS Configuration
- [ ] `eas.json` создан ✅
- [ ] Production profile настроен ✅
- [ ] Submit profile настроен ✅

### Code Quality
- [ ] Нет TypeScript ошибок
- [ ] Нет ESLint warnings
- [ ] Все компоненты работают
- [ ] Протестировано на реальном устройстве

### Performance
- [ ] Анимации работают плавно (60fps) ✅
- [ ] Нет memory leaks
- [ ] Быстрый запуск (<3 секунд)
- [ ] Нет crashes

### Localization
- [ ] English работает ✅
- [ ] Hebrew с RTL работает ✅
- [ ] Russian работает ✅
- [ ] Все тексты переведены ✅

### Features Testing
- [ ] Tip calculation работает
- [ ] Custom tip работает
- [ ] Bill splitting работает
- [ ] Currency switching работает
- [ ] Language switching работает
- [ ] Все кнопки отзывчивы

---

## 📱 Device Compatibility

### Tested On
- [ ] iPhone 15 Pro (iOS 17)
- [ ] iPhone 14 (iOS 16)
- [ ] iPhone SE (iOS 15)
- [ ] iPad Pro (опционально)

### Supported
- [ ] iOS 13.0+ (минимум)
- [ ] Portrait orientation
- [ ] Dark mode
- [ ] Dynamic Island safe area
- [ ] All screen sizes

---

## 🚀 Build Process

### Before Building
- [ ] `npm install` выполнен без ошибок
- [ ] `npx expo start` работает локально
- [ ] Приложение протестировано в Expo Go
- [ ] Все изменения закоммичены в Git

### EAS Build
- [ ] EAS CLI установлен: `npm install -g eas-cli`
- [ ] Логин выполнен: `eas login`
- [ ] Project ID получен: `eas build:configure`

### Build Commands
```bash
# Preview build (тестирование)
eas build --platform ios --profile preview

# Production build (для App Store)
eas build --platform ios --profile production
```

- [ ] Preview build успешен
- [ ] Production build успешен
- [ ] `.ipa` файл скачан

---

## 📤 Submit Process

### App Store Connect Setup
- [ ] Новое приложение создано
- [ ] Все метаданные заполнены
- [ ] Скриншоты загружены
- [ ] Build выбран

### Submit for Review
- [ ] App Review Information заполнено
- [ ] Contact information актуальна
- [ ] Notes for Reviewer добавлены
- [ ] Demo account (если нужно)

### Final Check
- [ ] Все поля имеют зеленую галочку
- [ ] "Ready to Submit" статус
- [ ] Нажато "Submit for Review"

---

## ✅ Post-Submission

### During Review
- [ ] Мониторить статус в App Store Connect
- [ ] Проверять email от Apple
- [ ] Быть готовым ответить на вопросы

### After Approval
- [ ] Release app (автоматически или вручную)
- [ ] Поделиться ссылкой на App Store
- [ ] Мониторить reviews
- [ ] Отвечать на отзывы пользователей

---

## 🌐 Website Requirements

### Минимум что нужно создать:

#### 1. Landing Page
- Описание приложения
- Скриншоты
- Ссылка на App Store (после публикации)
- Контакты

#### 2. Privacy Policy Page
- Использовать privacy-policy.md ✅
- Разместить на публичном URL
- Пример: yoursite.com/privacy

#### 3. Support Page
- FAQ
- Контактная форма или email
- Информация о приложении
- Пример: yoursite.com/support

**Быстрое решение:**
- GitHub Pages (бесплатно)
- Vercel (бесплатно)
- Netlify (бесплатно)

---

## 📊 Metrics to Track

### App Store Connect Analytics
- Downloads
- Impressions
- Conversion rate
- Ratings & Reviews

### User Feedback
- Monitor reviews daily
- Respond to negative reviews
- Collect feature requests

---

## 🔄 Update Checklist (для будущих версий)

Когда выпускаете обновление:

- [ ] Увеличить `version` (1.0.0 → 1.1.0)
- [ ] Увеличить `buildNumber` (1 → 2)
- [ ] Написать "What's New"
- [ ] Создать новый build
- [ ] Submit для review

---

## ⚠️ Common Issues

### Build Fails
- Проверить package.json зависимости
- Удалить node_modules и переустановить
- Проверить eas.json конфигурацию

### Submit Fails
- Проверить Bundle ID
- Проверить certificates
- Проверить provisioning profiles

### Rejected by Apple
- Прочитать rejection reason внимательно
- Исправить указанные проблемы
- Resubmit после исправления

---

## 📞 Support Contacts

- **Expo Forums:** https://forums.expo.dev/
- **Apple Developer Support:** https://developer.apple.com/support/
- **EAS Documentation:** https://docs.expo.dev/build/introduction/

---

## ✅ Ready to Publish?

Если все чекбоксы отмечены, вы готовы к публикации!

```bash
# Запустите процесс публикации
eas build --platform ios --profile production
eas submit --platform ios --latest
```

**Удачи с публикацией! 🚀**


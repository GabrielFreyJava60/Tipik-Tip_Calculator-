# 💧 Liquid Glass Tip Calculator

A premium cross-platform mobile tip calculator with stunning **Liquid Glass** design aesthetics.

## ✨ Features

### Core Functionality
- 💰 **Smart Tip Calculation**
  - Bill amount input
  - Preset tip percentages (10%, 12%, 15%, 18%, 20%)
  - Custom tip percentage
  - Split bill among multiple people
  - Real-time calculations

### Design
- 🎨 **Liquid Glass UI**
  - Animated gradient blobs in background
  - Glassmorphism effects (blur, transparency)
  - Smooth 60fps animations
  - Premium, organic feel

### Internationalization
- 🌍 **3 Languages**
  - 🇬🇧 English
  - 🇮🇱 Hebrew (RTL support)
  - 🇷🇺 Russian

### Currency Support
- 💱 **3 Currencies**
  - ₪ Israeli Shekel (ILS)
  - $ US Dollar (USD)
  - € Euro (EUR)

## 🛠 Tech Stack

- **Framework:** React Native with Expo (~54.0.0)
- **Language:** TypeScript
- **State Management:** Zustand
- **Internationalization:** i18next + react-i18next
- **Animations:** react-native-reanimated (~3.10.1)
- **UI Effects:** expo-blur, expo-linear-gradient
- **Gestures:** react-native-gesture-handler

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## 📱 Usage

### Scan QR Code with Expo Go

1. Install Expo Go on your device
2. Run `npm start`
3. Scan the QR code
4. App will load instantly

### Development

The app will hot-reload as you make changes.

## 🎯 Project Structure

```
liquid-tip-calculator/
├── src/
│   ├── store/
│   │   └── useAppStore.ts         # Zustand state management
│   ├── i18n/
│   │   ├── index.ts               # i18n configuration
│   │   └── locales/
│   │       ├── en.json            # English translations
│   │       ├── he.json            # Hebrew translations
│   │       └── ru.json            # Russian translations
│   └── components/
│       ├── BackgroundLayout.tsx    # Animated fluid background
│       ├── GlassCard.tsx          # Glassmorphism container
│       ├── LanguageSelector.tsx   # Language switcher
│       ├── CurrencySelector.tsx   # Currency switcher
│       └── Calculator.tsx         # Main calculator logic
├── App.tsx                        # Main app entry
├── app.json                       # Expo configuration
├── package.json                   # Dependencies
└── tsconfig.json                  # TypeScript configuration
```

## 🎨 Design Details

### Liquid Glass Effect
- **Background:** Dark gradient with animated blobs
- **Cards:** Translucent glass with blur effect
- **Borders:** Subtle white borders (20% opacity)
- **Shadows:** Soft glows and depth

### Animations
- Fluid blob movements (8-10 second cycles)
- Smooth easing (Easing.inOut)
- 60fps performance
- No jank or stutters

### Color Palette
- **Background:** `#0A0F1C` → `#1A1F2E`
- **Accent:** `#64C8FF` (Cyan Blue)
- **Glass:** White with 5-15% opacity
- **Text:** White with 70-100% opacity

## 🌐 RTL Support

When Hebrew is selected:
- Layout direction changes to RTL
- Text alignment switches
- Input directions flip
- UI remains beautiful

## 🧪 Error Handling

- Invalid input validation
- Minimum 1 person for splitting
- Custom tip range: 0-100%
- Decimal input support
- Safe number parsing

## 📄 License

MIT License - feel free to use this project!

## 🚀 Made with

- ❤️ Love
- ☕ Coffee
- 🎨 Design passion
- 💎 Attention to detail

---

**Enjoy calculating tips in style!** ✨


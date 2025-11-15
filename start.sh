#!/bin/bash
echo "💧 Starting Liquid Glass Tip Calculator..."
echo ""
echo "🧹 Clearing all caches..."
rm -rf .expo node_modules/.cache
echo "✅ Caches cleared!"
echo ""
echo "🚀 Starting Metro with clean cache..."
echo ""

npx expo start --clear

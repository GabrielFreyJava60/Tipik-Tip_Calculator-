import { create } from 'zustand';

export type Language = 'en' | 'he' | 'ru';
export type Currency = 'ILS' | 'USD' | 'EUR';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  ILS: '₪',
  USD: '$',
  EUR: '€',
};

interface BillState {
  amount: string;
  tipPercentage: number;
  numberOfPeople: number;
}

interface AppStore {
  language: Language;
  currency: Currency;
  bill: BillState;
  
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
  setBillAmount: (amount: string) => void;
  setTipPercentage: (percentage: number) => void;
  setNumberOfPeople: (people: number) => void;
  
  getTipAmount: () => number;
  getTotalAmount: () => number;
  getAmountPerPerson: () => number;
}

export const useAppStore = create<AppStore>((set, get) => ({
  language: 'en',
  currency: 'USD',
  bill: {
    amount: '',
    tipPercentage: 15,
    numberOfPeople: 1,
  },
  
  setLanguage: (lang) => set({ language: lang }),
  setCurrency: (curr) => set({ currency: curr }),
  setBillAmount: (amount) => set((state) => ({ 
    bill: { ...state.bill, amount } 
  })),
  setTipPercentage: (percentage) => set((state) => ({ 
    bill: { ...state.bill, tipPercentage: percentage } 
  })),
  setNumberOfPeople: (people) => set((state) => ({ 
    bill: { ...state.bill, numberOfPeople: Math.max(1, people) } 
  })),
  
  getTipAmount: () => {
    const { bill } = get();
    const amount = parseFloat(bill.amount) || 0;
    return (amount * bill.tipPercentage) / 100;
  },
  
  getTotalAmount: () => {
    const { bill } = get();
    const amount = parseFloat(bill.amount) || 0;
    return amount + get().getTipAmount();
  },
  
  getAmountPerPerson: () => {
    const { bill } = get();
    const total = get().getTotalAmount();
    return total / bill.numberOfPeople;
  },
}));


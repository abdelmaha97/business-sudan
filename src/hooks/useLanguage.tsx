
import { create } from 'zustand';
import { translations } from '@/i18n/translations';

interface LanguageState {
  language: 'ar';
  t: (key: string, section?: string) => string;
}

export const useLanguage = create<LanguageState>(() => ({
  language: 'ar',
  t: (key, section = 'common') => {
    try {
      // @ts-ignore - we know this is safe
      return translations.ar[section][key] || key;
    } catch {
      return key;
    }
  },
}));

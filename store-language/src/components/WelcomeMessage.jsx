import React from 'react';
import { useLanguage } from './LanguageContext';

const WelcomeMessage = () => {
  const [selectedLanguage] = useLanguage();

  const messages = {
    en: 'Hello World!',
    de: 'Hallo Welt!',
    fr: 'Bonjour le Monde!',
    it: 'Ciao Mondo!',
    es: 'Hola Mundo!',
    tr: 'Merhaba Dünya!',
    ja: 'こんにちは世界！',
    ko: '안녕, 세상아!',
    zh: '你好，世界！',
    ru: 'Привет, мир!',
    ar: 'مرحبا بالعالم!',
    fa: 'سلام دنیا!',
    pt: 'Olá Mundo!',
    sv: 'Hej världen!',
  };

  const getMessage = () => {
    return messages[selectedLanguage] || '';
  };

  return <p>{getMessage()}</p>;
};

export default WelcomeMessage;

import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageChooser = () => {
  const [selectedLanguage, handleLanguageChange] = useLanguage();

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    handleLanguageChange(selectedLanguage);
  };

  return (
    <div className="select">
      <select placeholder="test" value={selectedLanguage} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
        <option value="es">Spanish</option>
        <option value="tr">Turkish</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="zh">Chinese</option>
        <option value="ru">Russian</option>
        <option value="ar">Arabic</option>
        <option value="fa">Farsi</option>
        <option value="pt">Portuguese</option>
        <option value="sv">Swedish</option>
      </select>
    </div>
  );
};

export default LanguageChooser;

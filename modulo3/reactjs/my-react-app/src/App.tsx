import { useState } from 'react';
import { LanguageContext } from './useContext/LanguageContext';
import LanguageToggle from './useContext/LanguageToggle';
import { LoginContext } from './useContext/LoginContext';
import LoginStatus from './useContext/LoginStatus';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <><LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
    </LanguageContext.Provider>

    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
        <LoginStatus />
      </LoginContext.Provider></>
  );
}



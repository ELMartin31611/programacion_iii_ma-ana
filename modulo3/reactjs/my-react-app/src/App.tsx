import { useState } from 'react';
import FocoAutomatico from './useRef/FocoAutomatico';
import CirculoColorido from './useRef/CirculoColorido';
import ScrollDemo from './useRef/ScrollDemo';
import ReproductorSonido from './useRef/ReproductorSonido';
import MoverCaja from './useRef/MoverCaja';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <>
    <FocoAutomatico />
    <CirculoColorido />
    <ScrollDemo />
    <ReproductorSonido />
    <MoverCaja />
    </>
  );
}



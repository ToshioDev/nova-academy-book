"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns'; // Importamos la función `format` de `date-fns`
import { es } from 'date-fns/locale'; // Importamos el locale en español

interface InscriptionCounterProps {
  targetDate: string;
  isPopupVisible: boolean;  // Recibe la visibilidad como prop
  closePopup: () => void;    // Recibe la función para cerrar el popup
}

const InscriptionCounter: React.FC<InscriptionCounterProps> = ({
  targetDate,
  isPopupVisible,
  closePopup
}) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const targetDateObj = new Date(targetDate);

    const updateCounter = () => {
      const now = new Date();
      const difference = targetDateObj.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft(Math.floor(difference / 1000));
      } else {
        setTimeLeft(null);
      }
    };

    updateCounter(); // Ejecutar inmediatamente

    const timer = setInterval(updateCounter, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (seconds: number): { days: string; hours: string; minutes: string; secs: string } => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      secs: secs.toString().padStart(2, '0')
    };
  };

  const { days, hours, minutes, secs } = timeLeft !== null ? formatTime(timeLeft) : { days: '00', hours: '00', minutes: '00', secs: '00' };
  const formattedDate = format(new Date(targetDate), "d 'de' MMMM 'de' yyyy", { locale: es });

  if (!isPopupVisible) return null; // Si el popup no está visible, no renderiza nada

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-8 shadow-xl text-center relative"
      >
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-800"
          onClick={closePopup} // Llama a la función para cerrar el popup
        >
          ✖
        </button>
        <h2 className="text-3xl font-bold mb-6 text-white">
          Las inscripciones estarán disponibles en
        </h2>
        <div className="flex justify-center space-x-4">
          <TimeUnit value={days} label="Días" />
          <TimeUnit value={hours} label="Horas" />
          <TimeUnit value={minutes} label="Minutos" />
          <TimeUnit value={secs} label="Segundos" />
        </div>
        <p className="mt-6 text-white">
          Prepárate para inscribirte el {formattedDate}
        </p>
      </motion.div>
    </div>
  );
};

const TimeUnit: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <motion.div
    key={value}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center"
  >
    {/* Aumenté el tamaño del texto y lo puse en negrita */}
    <span className="text-6xl font-extrabold text-white">{value}</span>
    <span className="text-sm text-white mt-1">{label}</span>
  </motion.div>
);

export default InscriptionCounter;

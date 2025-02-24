import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface WeatherCardProps {
  weather: {
    date: string;
    day: string;
    temp_max: number;
    temp_min: number;
    rain_prob: number;
    description: string;
    icon: string;
  };
}

// 🎨 Función para asignar colores dinámicos según temperatura
const getBackgroundColor = (temp: number) => {
  if (temp < 20) return '#4FC3F7'; // Azul
  if (temp >= 21 && temp <= 30) return '#FFEB3B'; // Amarillo
  return '#FF7043'; // Naranja
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor(weather.temp_max) }]}>
      <Text style={styles.day}>{weather.day.toUpperCase()}</Text>
      <Text style={styles.date}>{weather.date}</Text>
      <Image source={{ uri: weather.icon }} style={styles.icon} />
      <Text style={styles.temp}>🌡 Máx: {weather.temp_max.toFixed(1)}°C</Text>
      <Text style={styles.temp}>🌡 Mín: {weather.temp_min.toFixed(1)}°C</Text>
      <Text style={styles.rain}>🌧 {weather.rain_prob.toFixed(0)}% lluvia</Text>
      <Text style={styles.description}>☁️ {weather.description}</Text>
    </View>
  );
};

// 📌 Estilos mejorados
const styles = StyleSheet.create({
  card: {
    width: 160, // 📏 Más compacto
    height: 220, // 📏 Reducir la altura
    padding: 25,
    marginHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  date: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  icon: {
    width: 70, // 📏 Iconos más compactos
    height: 50,
    marginVertical: 5,
  },
  temp: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  rain: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
  },
  description: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
});

export default WeatherCard;

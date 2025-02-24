import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import WeatherCard from './WeatherCard'; // Componente personalizado

// 🔑 API KEY y Configuración de Ciudad
const API_KEY = 'a926c69d8166c83598a397b1560f6721'; // Reemplázalo con tu API Key de OpenWeatherMap
const CITY = 'Huejutla de Reyes'; // Cambia la ciudad si deseas
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}&lang=es`;

// 📌 Interfaz para definir los datos del clima
interface WeatherData {
  date: string;
  day: string;
  temp_max: number;
  temp_min: number;
  rain_prob: number;
  description: string;
  icon: string;
}

const Climas = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(API_URL);
        const dailyData = response.data.list
          .filter((_: any, index: number) => index % 8 === 0) // Obtiene 1 dato por día
          .map((item: any) => {
            const date = new Date(item.dt * 1000);
            return {
              date: date.toLocaleDateString('es-ES'),
              day: date.toLocaleDateString('es-ES', { weekday: 'long' }),
              temp_max: item.main.temp_max,
              temp_min: item.main.temp_min,
              rain_prob: item.pop * 100,
              description: item.weather[0].description,
              icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            };
          });

        setWeatherData(dailyData);
      } catch (error) {
        console.error('❌ Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌍 Pronóstico del Clima</Text>
      <FlatList
        data={weatherData}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <WeatherCard weather={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EAF2F8',
  },
  title: {
    padding: 54,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#2C3E50',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Climas;

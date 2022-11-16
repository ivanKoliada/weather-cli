import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.services.js';

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  
  if (!token) {
    throw new Error('Не задан ключ API, задайте его командой -t [API_KEY]');
  }

  const { data: [{lat, lon} = location, ...rest] } = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: token,
    },
  });

  // const { lat, lon } = location;
  // console.log(lat, lon);

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat,
      lon,
      appid: token,
      units: 'metric',
      lang: 'ru',
    },
  });

  return data;
};

export { getWeather };

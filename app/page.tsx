'use client'
import { useEffect, useState } from 'react';
import { MyWeather } from '@/lib/currectlocationweather';

export default function Homepage() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const data = await MyWeather(latitude, longitude);
          setWeather(data);
        }

        catch {
          setError("Failed to fetch weather");
        }
      },

      () => {
        setError("Please Allow location");
      }
    );
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-white">
      <div className="p-10">
        {error && <h1>{error}</h1>}
        <h1 className="text-center font-medium text-2xl">My Location</h1>
        <div>
          {weather && <img src='https://openweathermap.org/payload/api/media/file/10d@2x.png' />}
          {weather && <h1 className="text-4xl font-medium text-yellow-200">{weather.main.temp} C</h1>}
        </div>

        <div>
          {weather && <h2>{weather.weather[0].description}</h2>}
          {weather && <h2>{weather.main.feels_like}</h2>}
        </div>

      </div>
    </div>
  )
}
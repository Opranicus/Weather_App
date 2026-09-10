'use client'
import { useEffect, useState } from 'react';
import { MyWeather } from '@/lib/currectlocationweather';
import Cards from '@/components/cards';

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
      <div className="p-10 flex flex-col justify-center items-center">
        {error && <h1>{error}</h1>}
        <h1 className="text-center font-medium text-2xl">My Location</h1>
        <div className="w-sm mt-8 flex flex-col items-center justify-center">

          {weather && <img src='https://openweathermap.org/payload/api/media/file/10d@2x.png' className="w-32 h-32" />}
          <div className="flex justify-center items-end gap-5 text-underline">

            {weather && <h1 className="text-3xl font-medium text-yellow-500">{weather.main.temp} C</h1>}
            {weather && <h1 className="text-[18px] font-medium">{weather.weather[0].description}</h1>}

          </div>

          {weather && <h2 className="mt-3 font-medium">Feels like: {weather.main.feels_like} C</h2>}

        </div>
        {weather && (
          <div className="flex flex-wrap justify-center items-center gap-10 w-full mt-10">
            <Cards label="Humidty" data={weather.main.humidity}>%</Cards>
          </div>
        )}
      </div>
    </div>
  )
}
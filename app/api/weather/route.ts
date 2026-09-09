import { NextResponse } from "next/server";

export async function GET(request: Request){
    const {searchParams} = new URL(request.url);

    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    const apiKey = process.env.OPEN_WEATHER_API_KEY;

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );

    const uvres = await fetch(
        `https://openweathermap.org${lat}&lon=${lon}&appid=${apiKey}`
    );

    if(!res.ok){
        return NextResponse.json(
            {error: "Failed To fetch weather."},
            {status: res.status}
        )
    }

    if(!uvres.ok){
        return NextResponse.json(
            {error: "Failed to retrieve UV"},
            {status: uvres.status}
        )
    }
    
    const data = await res.json();
    const uv = await uvres.json();

    return NextResponse.json(data, uv);
}
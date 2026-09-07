export async function MyWeather(lat: number, lon:number) {
    const res = await fetch(
        `/api/weather?lat=${lat}&lon=${lon}`
    );

    if(!res.ok){
        throw new Error("Failed to fetch weather");
    }
    return res.json();
}
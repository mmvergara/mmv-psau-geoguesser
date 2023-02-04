import { LatLngExpression } from "leaflet";

export function getDistance(origin: any, destination: any) {
  // return distance in meters
  const lon1 = toRadian(origin[1]),
    lat1 = toRadian(origin[0]),
    lon2 = toRadian(destination[1]),
    lat2 = toRadian(destination[0]);

  const deltaLat = lat2 - lat1;
  const deltaLon = lon2 - lon1;

  const a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
  const c = 2 * Math.asin(Math.sqrt(a));
  const EARTH_RADIUS = 6371;

  const distance = c * EARTH_RADIUS * 1000;
  let color = "#22c55e";
  if (distance > 51) color = "#ef4444";

  return { distance, color };
}
function toRadian(degree: number) {
  return (degree * Math.PI) / 180;
}

export function latLangToArray(latlng: LatLngExpression) {
  return latlng
    .toString()
    .split(",")
    .map((x) => Number(x));
}


export function randomizeArray(arr:any[]){
  return arr.sort(() => Math.random() - 0.5)
}
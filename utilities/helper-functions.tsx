import { LatLngExpression } from "leaflet";
import { NumericLiteral } from "typescript";

export function getDistance(origin: any, destination: any) {
  // return distance in meters
  var lon1 = toRadian(origin[1]),
    lat1 = toRadian(origin[0]),
    lon2 = toRadian(destination[1]),
    lat2 = toRadian(destination[0]);

  var deltaLat = lat2 - lat1;
  var deltaLon = lon2 - lon1;

  var a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
  var c = 2 * Math.asin(Math.sqrt(a));
  var EARTH_RADIUS = 6371;
  return c * EARTH_RADIUS * 1000;
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

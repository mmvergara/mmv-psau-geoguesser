import { LatLngExpression } from "leaflet";

export const PsauLocation: LatLngExpression = [15.219, 120.6949];

export type GuessLocation = {
  name: string;
  pictureUrl: string;
  hint: string;
  location: LatLngExpression;
};

export const GuessLocationList: GuessLocation[] = [
  { name: "Admin", hint: "ayoko nga", location: [15.21882391225057, 120.69529116153718], pictureUrl: "sad" },
];

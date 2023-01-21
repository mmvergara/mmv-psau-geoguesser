import { LatLngExpression } from "leaflet";

export const PsauLocation: LatLngExpression = [15.219, 120.6949];

export type GuessLocation = {
  name: string;
  pictureUrl: string;
  hint: string;
  location: LatLngExpression;
};

export const GuessLocationList: GuessLocation[] = [
  { name: "Admin", hint: "ayoko nga", location: [15.21882391225057, 120.89529116153718], pictureUrl: "sad" },
  { name: "Adminz", hint: "ayoko nga", location: [15.41882391225057, 120.69529116153718], pictureUrl: "sad" },
  { name: "Admizn", hint: "ayoko nga", location: [15.71882391225057, 120.69529116153718], pictureUrl: "sad" },
  { name: "Admizz", hint: "ayoko nga", location: [15.21882391225057, 120.69559116153718], pictureUrl: "sad" },
];

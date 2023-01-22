import { LatLngExpression } from "leaflet";

export const PsauLocation: LatLngExpression = [15.219, 120.6949];

export type GuessLocation = {
  name: string;
  pictureUrl: string;
  hint: string;
  location: LatLngExpression;
};
const image = '/1-pool.png'
export const GuessLocationList: GuessLocation[] = [
  { name: "Admin", hint: "ayoko nga", location: [15.218068172625523, 120.6957632303238], pictureUrl: image },
  { name: "Adminz", hint: "ayoko nga", location: [15.218306282663008, 120.693998336792], pictureUrl: image },
  { name: "Admizn", hint: "ayoko nga", location: [15.71882391225057, 120.69529116153718], pictureUrl: image },
  { name: "Admizz", hint: "ayoko nga", location: [15.21882391225057, 120.69559116153718], pictureUrl: image },
];

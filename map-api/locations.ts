import { LatLngExpression } from "leaflet";

export const PsauLocation: LatLngExpression = [15.219, 120.6949];

export type GuessLocation = {
  pictureUrl: string;
  imgProvider?: string;
  location: LatLngExpression;
};

const { psauClicks, google } = {
  psauClicks: "PSAU CLICKS (PitikAyti)",
  google: "Google Maps",
};

export const GuessLocationList: GuessLocation[] = [
  { imgProvider: psauClicks, location: [15.217855604682844, 120.69856882095338], pictureUrl: "/1-grandstand.jpg" },
  { imgProvider: psauClicks, location: [15.218859768194461, 120.69447040557863], pictureUrl: "/2-near-it.jpg" },
  { imgProvider: psauClicks, location: [15.217910912037096, 120.6980214493384], pictureUrl: "/3-grandstand.jpg" },
  { imgProvider: psauClicks, location: [15.219941393851334, 120.695076584816], pictureUrl: "/4-cas-entrance.jpg" },
  { imgProvider: psauClicks, location: [15.219397973167014, 120.6920349597931], pictureUrl: "/5-psauentrance.jpg" },
  { imgProvider: psauClicks, location: [15.219760137069706, 120.69622457027437], pictureUrl: "/6-canteen.jpg" },
  { imgProvider: psauClicks, location: [15.218973586931424, 120.69437384605409], pictureUrl: "/7-nearmulti.jpg" },
  { imgProvider: psauClicks, location: [15.219868940758847, 120.695618391037], pictureUrl: "/8-cas.jpg" },
  { imgProvider: psauClicks, location: [15.219868940758847, 120.695618391037], pictureUrl: "/9-cas.jpg" },
  { imgProvider: psauClicks, location: [15.219242706105556, 120.69373011589052], pictureUrl: "/10-multi.jpg" },
  { imgProvider: google, location: [15.22229097521822, 120.69515705108644], pictureUrl: "/11-2nd-gate.png" },
  {
    imgProvider: psauClicks,
    location: [15.219558505376606, 120.6928986310959],
    pictureUrl: "/12-president-cottage.jpg",
  },
  {
    imgProvider: psauClicks + " - Kapag dimo nakuha to drop kana sa psau",
    location: [15.219817341715572, 120.69164872169495],
    pictureUrl: "/13-psaucircle.jpg",
  },
  { imgProvider: psauClicks, location: [15.219982795607255, 120.6957793235779], pictureUrl: "/14-cas.jpg" },
  { imgProvider: google, location: [15.219625176876193, 120.69183111190797], pictureUrl: "/15-entrance-psau-text.PNG" },
  { imgProvider: google, location: [15.222003947282515, 120.694702069831], pictureUrl: "/16-trade-center.PNG" },
  { imgProvider: google, location: [15.2201848322498, 120.69287180900575], pictureUrl: "/17-studies.PNG" },
  { imgProvider: google, location: [15.219941643942509, 120.69233536720277], pictureUrl: "/18-playground.PNG" },
  { imgProvider: google, location: [15.22006584918577, 120.69113910198212], pictureUrl: "/19-ova.PNG" },
  { imgProvider: google, location: [15.22143748144984, 120.6938534975052], pictureUrl: "/20-mulberry.PNG" },
  { location: [15.218704397742686, 120.69587588310243], pictureUrl: "/21-avc.jpg" },
  { location: [15.218119513540781, 120.69633722305299], pictureUrl: "/22-near-vet.jpg" },
  { location: [15.214439076693214, 120.65945148468019], pictureUrl: "/23-magalang-terminal.png" },
  { location: [15.218088254527709, 120.69647669792177], pictureUrl: "/24-vet.jpg" },
  { location: [15.21851291645616, 120.70089161396027], pictureUrl: "/25-forestry.jpg" },
  { location: [15.219894908939422, 120.69922327995302], pictureUrl: "/26-ladies-dorm.jpg" },
  { location: [15.217601326251643, 120.69696568499988], pictureUrl: "/27-vet.jpg" },
  { location: [15.219760416232308, 120.69498538970949], pictureUrl: "/28-coed.jpg" },
  { location: [15.2168616583071, 120.69329023361207], pictureUrl: "/29-castech.jpg" },
];

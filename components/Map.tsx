import { MapContainer, Marker as MarkerPop, Polyline, TileLayer, useMapEvents } from "react-leaflet";
import { GuessLocation, GuessLocationList, PsauLocation } from "@/map-api/locations";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { LatLngExpression, Marker } from "leaflet";
import { useRouter } from "next/router";
import RestoreIcon from "@mui/icons-material/Restore";
import ImageIcon from "@mui/icons-material/Image";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MapMarker from "./MapMarker";
import { getDistance, latLangToArray } from "@/utilities/helper-functions";
import L from "leaflet";

const Map = () => {
  const playerMarkerRef = useRef<Marker>(null);
  const guessMarkerRef = useRef<Marker>(null);
  const router = useRouter();

  const [locationReveal, setLocationReveal] = useState<boolean>(false);
  const [playerMarkerLocation, setPlayerMarkerLocation] = useState<LatLngExpression | null>(null);
  const [guessLocation, setGuessLocation] = useState<GuessLocation | null>(null);
  const [locationsToGuess, setLocationsToGuess] = useState<GuessLocation[]>(
    GuessLocationList.sort(() => Math.random() - 0.5)
  );

  const nextGuessHandler = () => {
    setLocationReveal(false);
    setPlayerMarkerLocation(null);

    const newGuessLocation = locationsToGuess[Math.floor(Math.random() * locationsToGuess.length)];
    setGuessLocation(newGuessLocation);

    // Remove the picked location in the array
    setLocationsToGuess((prevLocs) => {
      return prevLocs.filter((p) => p.name != newGuessLocation.name);
    });

    if (locationsToGuess.length === 0) {
      router.push("/finished");
    }
  };

  const guessSubmitHandler = () => {
    if (guessLocation && playerMarkerLocation) {
      console.log(playerMarkerLocation);
      const distance = getDistance(latLangToArray(guessLocation.location), playerMarkerLocation);
      console.log({distance});
    }
    setLocationReveal(true);
  };
  useEffect(() => {
    nextGuessHandler();
  }, []);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = playerMarkerRef.current;
        if (marker != null) setPlayerMarkerLocation(marker.getLatLng());
      },
    }),
    []
  );

  const MapEventComponent = () => {
    useMapEvents({
      click: (e) => {
        setPlayerMarkerLocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };
  return (
    <main className='h-screen flex flex-col z-0'>
      <MapContainer center={PsauLocation} zoom={60} scrollWheelZoom={true} className='h-10 flex-grow  '>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MapMarker
          playerMarkerRef={playerMarkerRef}
          eventHandlers={eventHandlers}
          guessLocation={guessLocation}
          guessMarkerRef={guessMarkerRef}
          locationReveal={locationReveal}
          playerMarkerLocation={playerMarkerLocation}
        />
        {/* {playerMarkerLocation && (
          <MarkerPop eventHandlers={eventHandlers} position={playerMarkerLocation} ref={playerMarkerRef}>
            {guessLocation && locationReveal && (
              <>
                <MarkerPop position={guessLocation.location} ref={guessMarkerRef} />
                <Polyline positions={[playerMarkerLocation, guessLocation.location]} />
              </>
            )}
          </MarkerPop>
        )} */}
        <MapEventComponent />
      </MapContainer>
      <button className='text-psauYellow bg-emerald-900 py-3 font-semibold hover:bg-emerald-800 shadow-xl drop-shadow-lg'>
        <span className='mx-2'>See Image</span>
        <ImageIcon />
      </button>
      <BottomNavigation showLabels sx={{ backgroundColor: "#026701" }}>
        <BottomNavigationAction sx={{ color: "#ffb90f" }} label='Quit' icon={<RestoreIcon />} />
        {!locationReveal && (
          <BottomNavigationAction
            sx={{ color: "#026701", backgroundColor: "#ffb90f", fontWeight: "bold", fontSize: "50px" }}
            label='Guess!'
            onClick={guessSubmitHandler}
            icon={<QuestionMarkIcon />}
          />
        )}
        <BottomNavigationAction
          sx={{ color: "#ffb90f" }}
          label={locationReveal ? "Next Guess" : "Skip"}
          onClick={nextGuessHandler}
          icon={<ArrowForwardIcon />}
        />
      </BottomNavigation>
    </main>
  );
};

export default Map;

import { GuessLocation, GuessLocationList, PsauLocation } from "@/map-api/locations";
import { BottomNavigation, BottomNavigationAction, Button } from "@mui/material";
import { Marker } from "leaflet";
import { useMemo, useRef, useState } from "react";
import { MapContainer, Marker as MarkerPop, Polyline, Popup, TileLayer, useMapEvents } from "react-leaflet";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageIcon from "@mui/icons-material/Image";

const Map = () => {
  const [playerMarkerLocation, setPlayerMarkerLocation] = useState(PsauLocation);

  const [guessLocation, setGuessLocation] = useState<GuessLocation | null>(null);
  const [locationsToGuess, setLocationsToGuess] = useState<GuessLocation[]>(
    GuessLocationList.sort(() => Math.random() - 0.5)
  );

  const [locationReveal, setLocationReveal] = useState<boolean>(false);

  const nextGuessHandler = () => {};
  const guessSubmitHandler = () => {
    // Pick a random element again
    const newGuessLocation = locationsToGuess[Math.floor(Math.random() * locationsToGuess.length)];
    setGuessLocation(newGuessLocation);

    // Remove the picked location in the array
    setLocationsToGuess((prevLocs) => {
      return prevLocs.filter((p) => p.name != newGuessLocation.name);
    });
  };

  const playerMarkerRef = useRef<Marker>(null);
  const guessMarkerRef = useRef<Marker>(null);
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
        console.log(e.latlng);
        setPlayerMarkerLocation(e.latlng);
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
        <MarkerPop draggable={true} eventHandlers={eventHandlers} position={playerMarkerLocation} ref={playerMarkerRef}>
          {guessLocation && locationReveal && <MarkerPop position={guessLocation.location} ref={guessMarkerRef} />}
          <Popup minWidth={90}>Drag me to the location!</Popup>
          <MapEventComponent />
        </MarkerPop>
      </MapContainer>
      <button className='text-psauYellow bg-emerald-900 py-3 font-semibold hover:bg-emerald-800 shadow-xl drop-shadow-lg'>
        <span className='mx-2'>See Image</span>
        <ImageIcon />
      </button>

      <BottomNavigation showLabels sx={{ backgroundColor: "#026701" }}>
        <BottomNavigationAction sx={{ color: "#ffb90f" }} label='Quit' icon={<RestoreIcon />} />
        <BottomNavigationAction
          sx={{ color: "#026701", backgroundColor: "#ffb90f", fontWeight: "bold", fontSize: "50px" }}
          label='Guess!'
          onClick={guessSubmitHandler}
        />
        <BottomNavigationAction sx={{ color: "#ffb90f" }} label='Skip' onClick={() => {}} icon={<FavoriteIcon />} />
      </BottomNavigation>
    </main>
  );
};

export default Map;

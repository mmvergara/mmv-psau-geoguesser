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
import { getDistance, latLangToArray, randomizeArray } from "@/utilities/helper-functions";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Map = () => {
  const playerMarkerRef = useRef<Marker>(null!);
  const guessMarkerRef = useRef<Marker>(null!);
  const botNavRef = useRef<HTMLDivElement>(null!);
  const router = useRouter();

  const [polyLineColor, setPolyLineColor] = useState<string>("#22c55e");
  const [locationReveal, setLocationReveal] = useState<boolean>(false);
  const [playerMarkerLocation, setPlayerMarkerLocation] = useState<LatLngExpression | null>(null);
  const [guessLocation, setGuessLocation] = useState<GuessLocation | null>(null);
  const [locationsToGuess, setLocationsToGuess] = useState<GuessLocation[]>(randomizeArray(GuessLocationList));

  const nextGuessHandler = () => {
    setLocationReveal(false);
    setPlayerMarkerLocation(null);

    // Pick a random location
    const newGuessLocation = locationsToGuess[Math.floor(Math.random() * locationsToGuess.length)];
    setGuessLocation(newGuessLocation);

    // Remove the picked random location
    setLocationsToGuess((prevLocs) => prevLocs.filter((p) => p.name != newGuessLocation.name));

    if (locationsToGuess.length === 0) router.push("/finished");
    handleOpenImgModal();
  };

  const guessSubmitHandler = () => {
    if (guessLocation && playerMarkerLocation) {
      const distance = getDistance(latLangToArray(guessLocation.location), playerMarkerLocation);
      setPolyLineColor(distance.color);
    }
    setLocationReveal(true);
  };
  useEffect(() => {
    nextGuessHandler();
    botNavRef.current.scrollIntoView({ behavior: "smooth" });
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
  const [open, setOpen] = useState(false);
  const handleOpenImgModal = () => setOpen(true);
  const handleCloseImgModal = () => setOpen(false);

  return (
    <main className='h-screen flex flex-col z-0 font-Poppins'>
      <BottomNavigation ref={botNavRef} showLabels sx={{ backgroundColor: "#064e3b" }}>
        <BottomNavigationAction
          onClick={() => router.push("/")}
          sx={{ color: "#ffb90f" }}
          label='Quit'
          icon={<RestoreIcon />}
        />
        {!locationReveal && playerMarkerLocation && (
          <BottomNavigationAction
            className='font-Poppins bg-psauYellow'
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
      <MapContainer center={PsauLocation} zoom={60} scrollWheelZoom={true} className='h-10 flex-grow'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {playerMarkerLocation && (
          <MarkerPop eventHandlers={eventHandlers} position={playerMarkerLocation} ref={playerMarkerRef}>
            {guessLocation && locationReveal && (
              <>
                <MarkerPop position={guessLocation.location} ref={guessMarkerRef} />
                <Polyline color={polyLineColor} positions={[playerMarkerLocation, guessLocation.location]} />
              </>
            )}
          </MarkerPop>
        )}
        <MapEventComponent />
      </MapContainer>
      <button
        onClick={handleOpenImgModal}
        className='text-psauYellow bg-emerald-900 py-3 font-semibold hover:bg-emerald-800 shadow-xl drop-shadow-lg'
      >
        <span className='mx-2'>See Image </span>
        <ImageIcon />
        {playerMarkerLocation && playerMarkerLocation.toString().split("")}
      </button>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleCloseImgModal}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={ModalStyle}>
            <Image alt='modal' src={guessLocation?.pictureUrl || ""} width={280} height={280} />
            <Button onClick={handleCloseImgModal} variant='contained' color='success'>
              Close Image
            </Button>
          </Box>
        </Fade>
      </Modal>
    </main>
  );
};

const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#0b450a",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1em",
  border: "solid white 4px",
};

export default Map;

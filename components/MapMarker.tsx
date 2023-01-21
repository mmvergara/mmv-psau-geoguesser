import { GuessLocation } from "@/map-api/locations";
import { LatLngExpression, Marker as MarkerType } from "leaflet";
import { RefObject } from "react";
import { MapContainer, Marker as MarkerPop, Polyline, TileLayer, useMapEvents } from "react-leaflet";

interface MarkerProps {
  playerMarkerLocation: LatLngExpression | null;
  eventHandlers: { dragend(): void };
  locationReveal: boolean;
  guessLocation: GuessLocation | null;
  guessMarkerRef: RefObject<MarkerType<any>>;
  playerMarkerRef: RefObject<MarkerType<any>>;
}
const MapMarker: React.FC<MarkerProps> = ({
  playerMarkerLocation,
  eventHandlers,
  guessLocation,
  locationReveal,
  guessMarkerRef,
  playerMarkerRef,
}) => {
  return (
    <>
      {playerMarkerLocation && (
        <MarkerPop eventHandlers={eventHandlers} position={playerMarkerLocation} ref={playerMarkerRef}>
          {guessLocation && locationReveal && (
            <>
              <MarkerPop position={guessLocation.location} ref={guessMarkerRef} />
              <Polyline positions={[playerMarkerLocation, guessLocation.location]} />
            </>
          )}
        </MarkerPop>
      )}
    </>
  );
};

export default MapMarker;

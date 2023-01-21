import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), { ssr: false });
const Guess: React.FC = () => <Map />;
export default Guess;

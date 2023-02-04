import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme='light'
      />
    </>
  );
}

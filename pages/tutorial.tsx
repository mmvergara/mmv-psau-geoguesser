import Typography from "@mui/material/Typography";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Tutorial: React.FC = () => {
  const router = useRouter();

  return (
    <main className='h-screen w-screen flex justify-center items-center gap-4 flex-col bg-yellow-200 '>
      <Head>
        <title>Tutorial</title>
      </Head>
      <div className='mx-4'>
        <Typography id='modal-modal-title' variant='h6' component='h2' className='text-psauGreen font-bold'>
          Mechanics 😲
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          The game will show an image and you have to click on the map (it will produce a marker ) where you think the
          image was taken.
        </Typography>{" "}
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {"1. Click 'Start Guessing' to start the game."}
          <br />
          {"2. Click on the map where you think the image was taken."}
          <br />
          {"3. Click 'Guess' to submit your answer."}
          <br />
        </Typography>
        <button
          type='button'
          onClick={() => router.push("/")}
          className='mt-4 bg-psauGreen p-2 text-white font-semibold drop-shadow-xl'
        >
          Home 🏠
        </button>
      </div>
    </main>
  );
};

export default Tutorial;

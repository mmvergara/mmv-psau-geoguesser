import { useState } from "react";
import Navbar from "@/components/Layout/Navbar";


export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main className='h-screen flex flex-col '>
      <Navbar />
    </main>
  );
}

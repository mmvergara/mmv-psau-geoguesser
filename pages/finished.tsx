import { Button } from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";

const Finished: React.FC = () => {
  const handleClick = () =>{toast.success("sdasd")}
  return (
    <>
      <Link href={"/guess"} className='text-3xl'>
        Play again
      </Link>
      <Button onClick={handleClick}>asdasd</Button>
    </>
  );
};

export default Finished;

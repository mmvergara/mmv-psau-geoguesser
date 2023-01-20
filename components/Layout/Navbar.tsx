import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label='Home' icon={<RestoreIcon />} />
      <BottomNavigationAction label='Guess' onClick={() => router.push("/guess")} icon={<FavoriteIcon />} />
      <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default Navbar;

import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box sx={{ width: 150, height: "100%", ...sx }}>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="logo"
        width="100%"
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;

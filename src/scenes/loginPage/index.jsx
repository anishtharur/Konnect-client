import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width : 800px)");

  return <Box>LoginPage</Box>;
};

export default LoginPage;

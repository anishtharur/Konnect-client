import React from "react";
import { Typography, useTheme } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from "components/FlexBetween";
import { configR } from "App";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advertisement"
        src={`${configR.url}/assets/info4.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Kylie Cosmetics</Typography>
        <Typography color={medium}>kylieC.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Beauty is fist impression, be the person who you always wanted to be
        bold, barbie or bam!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

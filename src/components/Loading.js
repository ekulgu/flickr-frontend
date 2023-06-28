import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularIndeterminate = () => {
  return (
    <Box
      data-testid="loading-component"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CircularIndeterminate;
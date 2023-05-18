import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <Box
      className='footer'
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70px",
      }}
    >
      <CssBaseline />

      <Box
        component='footer'
        sx={{
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container
          maxWidth='sm'
          sx={{
            textAlign: "right",
          }}
        >
          <Typography variant='body2' color='text.secondary'>
            {"Copyright © "}
            Safe Haven Security Information Technology Suite{" "}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

import React from "react";
import Body from "../Components/Body/Body";
import Header from "../Components/Header/Header";
import { Box, Button, styled, Typography, Container } from "@mui/material";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <Container
      sx={{
        marginTop: "48px",
      }}
    >
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

export default HomePage;

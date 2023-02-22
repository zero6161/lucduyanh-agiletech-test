import {
  Box,
  Button,
  styled,
  Typography,
  Container,
  Paper,
  Avatar,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React, { useEffect, useState } from "react";
import { httpClient } from "../../getApi";
import CarouselUser from "./CarouselUser";

const SildeContainer = () => {
  // const UserContent = styled(Paper)({
  //   backgroundColor: "white",
  //   width: "60%",
  //   height: "330.59px",
  //   borderRadius: "20px",
  // });
  const UserContainer = styled(Box)({
    marginTop: "119.59px",
    backgroundColor: "#9C69E2",
    width: "100%",
    height: "100vh",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0 10px",
  });
  return (
    <>
      <UserContainer>
        <Typography
          textAlign="center"
          fontFamily="Helvetica"
          fontSize="40px"
          lineHeight="52px"
          color="#FFFF"
          fontWeight="700"
        >
          Testimonials
        </Typography>
        <CarouselUser />
      </UserContainer>
    </>
  );
};

export default SildeContainer;

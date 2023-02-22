import Carousel from "react-material-ui-carousel";

import React, { useEffect, useState, useRef } from "react";
import { httpClient } from "../../getApi";
import SlideContent from "./SlideContent";
import ArrowForward from "@mui/icons-material/ArrowForward";

const CarouselUser = () => {
  const [slide, setSlide] = useState([]);
  const imgSilde = () => {
    httpClient.get("galleries").then((res) => {
      setSlide(res.data);
    });
  };
  useEffect(() => {
    imgSilde();
  }, []);

  return (
    <Carousel navButtonsAlwaysVisible={true}>
      {slide.map((item) => (
        <SlideContent key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselUser;

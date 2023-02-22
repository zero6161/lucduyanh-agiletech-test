import { Typography, Box, Slide, styled, Divider } from "@mui/material";
import React from "react";
import image1 from "../../image/body1.png";
import image2 from "../../image/body2.png";
import image3 from "../../image/body3.png";
import image4 from "../../image/body4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SildeContainer from "./SildeContainer";
const Image = styled(Box)({
  maxWidth: "228.47px",
  height: "207.79px",
});

const Body = () => {
  return (
    <>
      <Box mt="164px">
        <Typography
          fontWeight={700}
          textAlign="center"
          fontSize="40px"
          lineHeight="130%"
          fontFamily="Helvetica"
          marginBottom="49.24px"
        >
          Features
        </Typography>
        <Typography
          fontStyle="normal"
          fontWeight={500}
          fontSize="18px"
          lineHeight="160%"
          textAlign="center"
          width="575.12px"
          mx="auto"
        >
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </Typography>
        <Box mt="200px">
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box
              flex="50%"
              display="flex"
              bgcolor="rgba(104, 201, 186, 0.1)"
              borderRadius="85% 20% 20% 20%"
              maxWidth="500px"
              justifyContent="space-around"
            >
              <Image alignSelf="center" component="img" src={`${image1}`} />
              <Box>
                <Typography
                  fontFamily="Helvetica"
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="24px"
                  lineHeight="130%"
                  pt="48px"
                >
                  Search Data
                </Typography>
                <Typography
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight="160%"
                  maxWidth="216.66px"
                  margin="19.7px 0"
                >
                  Don’t worry if your data is very large, the Data Warehoue
                  provides a search engine, which is useful for making it easier
                  to find data effectively saving time.
                </Typography>
                <Box display="flex">
                  <Typography mr="19.7px" paddingBottom="32.5px">
                    Learn more
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box
              flex="50%"
              display="flex"
              bgcolor="rgba(156, 105, 226, 0.1)"
              borderRadius="75% 20% 20% 20%"
              maxWidth="500px"
              justifyContent="space-around"
            >
              <Image alignSelf="center" component="img" src={`${image2}`} />
              <Box>
                <Typography
                  fontFamily="Helvetica"
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="24px"
                  lineHeight="130%"
                  pt="48px"
                >
                  24 Hours Access
                </Typography>
                <Typography
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight="160%"
                  maxWidth="216.66px"
                  margin="19.7px 0"
                >
                  Access is given 24 hours a full morning to night and meet
                  again in the morning, giving you comfort when you need data
                  when urgent.
                </Typography>
                <Box display="flex">
                  <Typography mr="19.7px" paddingBottom="32.5px">
                    Learn more
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            mt="49.24px"
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box
              flex="50%"
              display="flex"
              bgcolor="rgba(240, 99, 184, 0.1)"
              borderRadius="75% 20% 20% 20%"
              maxWidth="500px"
            >
              <Image alignSelf="center" component="img" src={`${image3}`} />
              <Box>
                <Typography
                  fontFamily="Helvetica"
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="24px"
                  lineHeight="130%"
                  pt="48px"
                >
                  Print Out
                </Typography>
                <Typography
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight="160%"
                  maxWidth="216.66px"
                  margin="19.7px 0"
                >
                  Print out service gives you convenience if someday you need
                  print data, just edit it all and just print it.
                </Typography>
                <Box display="flex">
                  <Typography mr="19.7px" paddingBottom="32.5px">
                    Learn more
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
            <Box
              flex="50%"
              display="flex"
              bgcolor="rgba(45, 156, 219, 0.1)"
              borderRadius="75% 20% 20% 20%"
              maxWidth="500px"
            >
              <Image alignSelf="center" component="img" src={`${image4}`} />
              <Box>
                <Typography
                  fontFamily="Helvetica"
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="24px"
                  lineHeight="130%"
                  pt="48px"
                >
                  Security Code
                </Typography>
                <Typography
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight="160%"
                  maxWidth="216.66px"
                  margin="19.7px 0"
                >
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </Typography>
                <Box display="flex">
                  <Typography mr="19.7px" paddingBottom="32.5px">
                    Learn more
                  </Typography>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <SildeContainer />
      <Divider
        sx={{
          variant: "middle",
          margin: "88.37px 0",
        }}
      />
    </>
  );
};

export default Body;

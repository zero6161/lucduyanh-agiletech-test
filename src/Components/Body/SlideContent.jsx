import React from "react";
import {
  Avatar,
  Paper,
  styled,
  Typography,
  Box,
  IconButton,
  Link,
} from "@mui/material";
const SliderContent = styled(Paper)({
  width: "80%",
  height: "330px",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const SlideContent = ({ item }) => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <SliderContent elevation={12}>
          <Box display="flex">
            <Box display="flex">
              <Box
                component="img"
                borderRadius="50%"
                alignSelf="flex-start"
                sx={{
                  maxWidth: "130px",
                  height: "90.16px",
                }}
                src={item.imageUrl}
                marginRight="43.33px"
              />
              <Box>
                <Typography
                  variant="h6"
                  fontSize="18px"
                  lineHeight="28.8px"
                  letterSpacing="0.5%"
                  fontWeight={900}
                >
                  John Fang
                </Typography>
                <Link underline="hover" color="#9C69E2">
                  wordfaang.com
                </Link>
                <Box marginTop="41.7px">
                  <Typography maxWidth="556.11px" height="130.23px">
                    {item.desctiption}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </SliderContent>
      </Box>
    </>
  );
};

export default SlideContent;

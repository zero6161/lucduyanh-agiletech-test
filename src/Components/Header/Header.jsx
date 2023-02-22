import { Box, Button, styled, Typography, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import imgContent from "../../image/image1.png";
export const Navbar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const Logo1 = styled(Box)({
  width: "19.88px",
  height: "19.88px",
  backgroundColor: "#9C69E2",
  borderRadius: "20px",
  marginRight: "8.94px",
});
export const Logo2 = styled(Box)({
  width: "19.88px",
  height: "34.78px",
  backgroundColor: "#F063B8",
  borderRadius: "20px",
});
export const ButtonCustom = styled(Button)({
  borderRadius: "50px",
  display: "inline-block",
  backgroundColor: "#9C69E2",
  boxShadow: "0px 5px 5px rgba(75, 93, 104, 0.1)",
  mr: "31px",
  "&:hover": {
    backgroundColor: "rgba(156, 105, 226, 0.8)",
  },
});
const Header = () => {
  const navigate = useNavigate();
  const userToken = sessionStorage.getItem("userToken");
  const logOut = () => {
    sessionStorage.removeItem("userToken");
    navigate(0);
  };
  return (
    <>
      <Navbar>
        <Box display="flex" alignItems="flex-end">
          <Logo1 />
          <Logo2 />
        </Box>
        <Box>
          {userToken ? (
            <Box>
              <ButtonCustom
                onClick={() => navigate("/profile")}
                variant="contained"
              >
                <Typography
                  textTransform="none"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="160%"
                  letterSpacing="0.005em"
                  fontSize="16px"
                  padding="18px 68.7px 15.63px 81px"
                >
                  Profile
                </Typography>
              </ButtonCustom>{" "}
              <ButtonCustom onClick={logOut} variant="contained">
                <Typography
                  textTransform="none"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="160%"
                  letterSpacing="0.005em"
                  fontSize="16px"
                  padding="18px 68.7px 15.63px 81px"
                >
                  Log out
                </Typography>
              </ButtonCustom>
            </Box>
          ) : (
            <ButtonCustom
              onClick={() => navigate("/login")}
              variant="contained"
            >
              <Typography
                textTransform="none"
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="160%"
                letterSpacing="0.005em"
                fontSize="16px"
                padding="18px 68.7px 15.63px 81px"
              >
                Sign In
              </Typography>
            </ButtonCustom>
          )}
        </Box>
      </Navbar>

      <Box display="flex">
        <Box mt="129.19px">
          <Typography
            variant="h6"
            fontWeight="800px"
            fontSize="80px"
            lineHeight="110%"
            maxHeight="182.86px"
            maxWidth="700"
            width={"100%"}
          >
            Save your data storage here.
          </Typography>
          <Typography
            margin="49.69px 0"
            fontWeight={500}
            fontSize="18px"
            fontStyle="normal"
            maxHeight="119.25px"
            maxWidth="377.64px"
            lineHeight="160%"
            width={"100%"}
            variant="body2"
          >
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                backgroundColor: "#9C69E2",
              }}
            >
              <Typography
                padding={"15.9px 36.77px 14.91px 36.77px"}
                fontWeight={800}
                fontSize="18px"
                lineHeight={"160%"}
                textTransform="none"
              >
                Learn more
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${imgContent})`,
            alignSelf: "flex-end",
            backgroundPosition: "bottom",
            width: "100%",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
          height="401.49px"
          maxWidth="759.25px"
        ></Box>{" "}
      </Box>
    </>
  );
};

export default Header;

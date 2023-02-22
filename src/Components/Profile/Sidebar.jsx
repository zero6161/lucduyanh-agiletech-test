import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo1, Logo2 } from "../Header/Header";

const Sidebar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <Box width="15vw" maxHeight="100%" bgcolor="#D9D9D9">
      <Box
        onClick={() => navigate("/")}
        sx={{
          cursor: "pointer",
        }}
        mt="30px"
        display="flex"
        alignItems="flex-end"
      >
        <Logo1 />
        <Logo2 />
      </Box>
      <Box display="flex" flexDirection="column" mt="105px">
        <Button variant="text">
          <Typography textTransform="none" fontSize="20px" fontWeight={400}>
            Post
          </Typography>
        </Button>
        <Button onClick={logOut} variant="text">
          <Typography textTransform="none" fontSize="20px" fontWeight={400}>
            Logout
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;

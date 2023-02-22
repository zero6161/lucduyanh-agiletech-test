import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { httpClient } from "../getApi";
import { useNavigate } from "react-router-dom";
import { ButtonCustom, Logo1, Logo2 } from "../Components/Header/Header";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const submitCheck = (event) => {
    event.preventDefault();
    httpClient
      .post("/auth/login", {
        username: userName,
      })
      .then((res) => {
        if (res.data.code === 401) {
          setErr(true);
          return;
        }
        sessionStorage.setItem("userToken", res.data.accessToken);
        navigate(`/`);
      });
  };
  return (
    <Container
      sx={{
        mt: "79.29px",
      }}
    >
      <Box display="flex" alignItems="flex-end">
        <Logo1 />
        <Logo2 />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          fontWeight={400}
          fontSize="64px"
          lineHeight="102.4px"
          letterSpacing="0.5%"
          variant="h1"
          textAlign="center"
        >
          Sign In
        </Typography>
        <Box component="form" mt="28px" onSubmit={submitCheck}>
          <Typography
            variant="body1"
            fontSize="16px"
            letterSpacing="0.5%"
            lineHeight="25.6px"
          >
            User name
          </Typography>
          <Box
            mb="48px"
            onChange={(e) => setUserName(e.target.value)}
            required
            display="block"
            component="input"
            width="407px"
            height="57px"
            mt="12px"
          />
          <ButtonCustom
            type="submit"
            sx={{
              width: "407px",
            }}
            variant="contained"
          >
            Sign In
          </ButtonCustom>
        </Box>
        <Box mt="20px">
          {err && (
            <Alert severity="error">Please Check again your user name</Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;

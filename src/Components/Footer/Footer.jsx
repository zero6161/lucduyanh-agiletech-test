import { Box, Typography, Avatar, IconButton } from "@mui/material";
import React from "react";
import { Logo1, Logo2 } from "../Header/Header";
import ChatIcon from "@mui/icons-material/Chat";
const Footer = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box display="flex">
            <Box pb="67.18px" display="flex" alignItems="flex-end">
              <Logo1 />
              <Logo2 />
            </Box>
            <Typography
              pb="67.18px"
              fontWeight={900}
              fontSize="20px"
              lineHeight="32px"
              ml="20px"
            >
              DataWarehouse
            </Typography>
          </Box>
          <Typography
            fontWeight={500}
            fontSize="16px"
            lineHeight="28.8px"
            letterSpacing="1%"
            maxWidth="80%"
          >
            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
          </Typography>
          <Typography
            fontWeight={400}
            fontSize="16px"
            lineHeight="28.8px"
            letterSpacing="1%"
            maxWidth="80%"
          >
            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography
              mb="30.8px"
              fontWeight={900}
              fontSize="16px"
              lineHeight="25.6px"
            >
              About
            </Typography>

            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Profile
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Features
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Careers
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              DW News
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography
              mb="30.8px"
              fontWeight={900}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Help
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Support
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Sign up
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Guide
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Reports
            </Typography>
            <Typography
              mb={1}
              fontWeight={400}
              fontSize="16px"
              lineHeight="25.6px"
            >
              Q&A{" "}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography
              mb="30.8px"
              fontWeight={900}
              fontSize="20px"
              lineHeight="32px"
            >
              Social Media
            </Typography>
          </Box>
          <Box display="flex">
            <Avatar />
            <Avatar
              sx={{
                margin: "0 14.4px",
              }}
            />
            <Avatar />
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="118.32px">
        <Typography
          fontSize="12px"
          fontWeight={400}
          letterSpacing="1%"
          lineHeight="21.6px"
          variant="body2"
          width="30%"
        >
          © Datawarehouse™, 2020. All rights reserved. Company Registration
          Number: 21479524.
        </Typography>
        <IconButton
          sx={{
            width: "16px",
            height: "16px",
          }}
          size="large"
        >
          <ChatIcon color="#9C69E2" />
        </IconButton>
      </Box>
    </>
  );
};

export default Footer;

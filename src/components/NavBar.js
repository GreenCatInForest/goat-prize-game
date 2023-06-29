import * as React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box
        // mobile screen

        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#4dd0e1",
        }}
      >
        <Tooltip>
          <IconButton
            size="small"
            onClick={() => {
              navigate("/");
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "black",
                mb: 1,
                transition: ".5s",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#c51162",
                  border: 0.5,
                },
              }}
            >
              M
            </Avatar>
          </IconButton>
        </Tooltip>
        <Typography
          onClick={() => {
            navigate("/");
          }}
          sx={{
            width: "100%",
            padding: 1,
            border: 1,
            transition: "background 1s, color 1s",
            "&:hover": {
              color: "white",
              backgroundColor: "#c51162",
              border: 0.5,
            },
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            width: "100%",
            padding: 1,
            transition: "background 1s, color 1s",
            "&:hover": {
              color: "white",
              backgroundColor: "#c51162",
              border: 0.5,
            },
          }}
        >
          FAQ
        </Typography>
        <Typography
          onClick={() => {
            navigate("/contacts");
          }}
          sx={{
            width: "100%",
            padding: 1,
            border: 1,
            transition: "background 1s, color 1s",
            "&:hover": {
              color: "white",
              backgroundColor: "#c51162",
              border: 0.5,
            },
          }}
        >
          Contacts
        </Typography>
      </Box>

      <Box
        // desctop screen

        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#4dd0e1",
          cursor: "pointer",
        }}
      >
        <Tooltip sx={{ mr: 2 }}>
          <IconButton
            size="small"
            onClick={() => {
              navigate("/");
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "black",
                transition: ".5s",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#c51162",
                  border: 0.5,
                },
              }}
            >
              M
            </Avatar>
          </IconButton>
        </Tooltip>
        <Typography
          sx={{
            minWidth: 100,
            py: 1,
            px: 0.5,
            mx: 1,
            borderRadius: 1,
            transition: "background 1s, color 1s",
            "&:hover": {
              backgroundColor: "#b2ebf2",
            },
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            minWidth: 100,
            py: 1,
            px: 0.5,
            mx: 1,
            borderRadius: 1,
            transition: "background 1s, color 1s",
            "&:hover": {
              backgroundColor: "#b2ebf2",
            },
          }}
        >
          FAQ
        </Typography>
        <Typography
          onClick={() => {
            navigate("/contacts");
          }}
          sx={{
            minWidth: 100,
            p: 1,
            borderRadius: 1,
            transition: "background 1s, color 1s",
            "&:hover": {
              backgroundColor: "#b2ebf2",
              border: 0.5,
            },
          }}
        >
          Contacts
        </Typography>
      </Box>
    </React.Fragment>
  );
};

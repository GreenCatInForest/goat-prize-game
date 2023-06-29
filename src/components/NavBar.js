import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export const NavBar = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Home Page">
          <IconButton size="small">
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        <Typography sx={{ minWidth: 100 }}>About</Typography>
        <Typography sx={{ minWidth: 100 }}>FAQ</Typography>
        <Typography sx={{ minWidth: 100 }}>Contacts</Typography>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Home Page">
          <IconButton size="small">
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        <Typography sx={{ minWidth: 100 }}>About</Typography>
        <Typography sx={{ minWidth: 100 }}>FAQ</Typography>
        <Typography sx={{ minWidth: 100 }}>Contacts</Typography>
      </Box>
    </React.Fragment>
  );
};

import React from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 240;
export const Sidebar = ({ navlist }) => {
  console.log(navlist);
  return (
    <>
      <main className={"flex-1"}>
        <Outlet />
      </main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0099d7",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Typography
          variant="h2"
          gutterBottom
          style={{
            fontSize: "24px",
            color: "white",
            textAlign: "left",
            paddingLeft: "15px",
          }}
        >
          Bayer Health
        </Typography>
        <List>
          {navlist?.map((item, index) => (
            <NavLink key={item.text} to={item.nav}>
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.text}
                    style={{ color: "white", textAlign: "left" }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

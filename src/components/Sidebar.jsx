import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { navigationLinks } from "../data/navigationLinks";

const Sidebar = () => {
  return (
    <div className="w-64 h-[50rem] shadow-lg p-4">
      <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <span
              style={{
                color:"lightblue",
                fontWeight: "bolder",
                padding:"5px",
              }}
            >
              Health
            </span>
            <span style={{ color: "darkblue", fontWeight: "bolder", padding:"5px", }}>care.</span>
          </Typography>
      <Typography variant="subtitle1">General</Typography>
      <List>
        {navigationLinks.map((link) => (
          <ListItem
            button
            key={link.id}
            className={`${
              link.label === "Dashboard"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            } rounded-lg mb-2`}
          >
            <ListItemIcon className="text-xl">{link.icon}</ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { AppBar, Toolbar, InputBase, IconButton, Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <AppBar
      position="static"
      className="bg-white shadow-none border-b border-gray-200">

      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <div className="ml-4 flex-between bg-gray-100 rounded-lg px-3 py-1">
            <Search className="text-gray-500" />
            <InputBase placeholder="Search" className="ml-2 text-gray-700 w-[23rem]" />
            <IconButton className="bg-blue color-white">
              <NotificationsIcon />
            </IconButton>
          </div>
        </div>
            <div className="flex gap-3 ml-[24rem] items-end">
        <Avatar
        className="rounded-md"
          // variant="square"
          alt="Remy Sharp"
          src="https://img.freepik.com/premium-vector/actress-vector-character-illustration-flat-style_1033579-56640.jpg?semt=ais_hybrid&w=740"
        />
        <button className="bg-blue-900 col-black rounded-md mb-1 w-9 h-8">+</button>
        </div>
        <div className="flex items-end">
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

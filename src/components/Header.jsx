// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleTheme }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (sessionStorage.getItem("activeTab")) {
      setActiveTab(sessionStorage.getItem("activeTab"));
    } else {
      setActiveTab(1);
    }
  }, [activeTab, sessionStorage.getItem("activeTab")]);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <div className="header-main-div">
          <div>
            <Button
              className={activeTab == 1 ? `activeTab` : ""}
              // className="activeTab"
              variant="text"
              sx={{ color: "white" }}
              onClick={() => {
                navigate("/");
                setActiveTab(1);
              }}
            >
              HOME
            </Button>
          </div>
          <div>
            <Button
              className={activeTab == 2 ? `activeTab` : ""}
              variant="text"
              sx={{ color: "white" }}
              // onClick={() => navigate("/exchange_rates_live")}
              onClick={() => {
                navigate("/exchange_rates_live");
                setActiveTab(2);
              }}
            >
              EXCHANGE RATES (LIVE)
            </Button>
          </div>
          <div>
            <Button
              className={activeTab == 3 ? `activeTab` : ""}
              variant="text"
              sx={{ color: "white" }}
              onClick={() => {
                navigate("/about");
                setActiveTab(3);
              }}
            >
              ABOUT
            </Button>
          </div>
          <div>
            <Button
              className={activeTab == 4 ? `activeTab` : ""}
              variant="text"
              sx={{ color: "white" }}
              // onClick={() => navigate("/error_page")}
              onClick={() => {
                navigate("/error_page");
                setActiveTab(4);
              }}
            >
              ERROR PAGE
            </Button>
          </div>
          <Switch
            checked={theme.palette.mode === "dark"}
            onChange={toggleTheme}
            color="default"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

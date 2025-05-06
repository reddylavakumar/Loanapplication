import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page-main">
      <div className="error-page-container">
        <h1>Something went wrong in the application.</h1>
        <div className="btn">
          {" "}
          <Button
            variant="outlined"
            size="medium"
            onClick={() => {
              navigate("/");
              // setActiveTab(1);
              sessionStorage.setItem("activeTab", 1);
            }}
          >
            GO HOME
          </Button>
        </div>
      </div>
    </div>
  );
};

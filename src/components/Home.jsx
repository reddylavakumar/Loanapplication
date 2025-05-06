import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import StickyHeadTable from "./TableData";
import AmortizationTable from "./TableData";

export const Home = () => {
  const theme = useTheme();

  const [show, setShow] = useState(false);
  const [loanAmount, setLoanAmount] = React.useState(100000);
  const [interestRate, setInterestRate] = React.useState(8.5);
  const [termYears, setTermYears] = React.useState(5);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    console.log(currency, "curr");
    sessionStorage.setItem("currency", currency);
  }, [currency]);

  return (
    <div className="home-main-container">
      <div>
        <h1>Loan Calculator Dashboard</h1>
        <Box sx={{ p: 2, display: "flex", gap: 2 }}>
          <TextField
            label="Loan Amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <TextField
            label="Interest Rate (%)"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(+e.target.value)}
          />
          <TextField
            label="Term (Years)"
            type="number"
            value={termYears}
            onChange={(e) => setTermYears(+e.target.value)}
          />
        </Box>

        <div className="calculate-btn">
          <Button variant="contained" onClick={() => setShow(true)}>
            CALCULATE
          </Button>
        </div>
        {show && (
          <>
            <div className="monthly-emi-text">
              <span>Monthly EMI: $2051.65</span>
            </div>
            <div className="select-reset-div">
              <div className="select-field">
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    autoWidth
                    label="Currency"
                  >
                    <MenuItem value={"USD"}>USD </MenuItem>
                    <MenuItem value={"EUR"}>EUR</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                    <MenuItem value={"GBP"}>GBP</MenuItem>
                    <MenuItem value={"JPY"}>JPY</MenuItem>
                    <MenuItem value={"AUD"}>AUD</MenuItem>
                    <MenuItem value={"CAD"}>CAD</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="reset-btn">
                <Button
                  variant="outlined"
                  // size="medium"
                  color="secondary"
                  onClick={() => setShow(false)}
                >
                  RESET TABLE
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      {show && (
        <>
          <div
            className={
              theme.palette.mode === "dark"
                ? "amortization-schedule-dark"
                : "amortization-schedule"
            }
          >
            Amortization Schedule (INR)
          </div>
          <div>
            <AmortizationTable
              loanAmount={loanAmount}
              interestRate={interestRate}
              termYears={termYears}
              currency={currency}
            />
          </div>
        </>
      )}
    </div>
  );
};

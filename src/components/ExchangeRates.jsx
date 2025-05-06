import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const ExchangeRates = () => {
  const columns = [
    { id: "currency", label: "Currency", minWidth: 80 },
    { id: "rate", label: "Rate", minWidth: 120, align: "right" },
  ];

  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const baseCurrency = sessionStorage.getItem("currency");
  const API_KEY = "c8ce9bb33cedf69ee1477034";

  const fetchRates = async () => {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
      );
      setRates(response.data.conversion_rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRates();
  }, [sessionStorage.getItem("currency")]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rateEntries = Object.entries(rates); // [['USD', 0.01186], ['EUR', 0.01046], ...]

  return (
    <>
      <div className="live-exhange-rates-header">
        Live Exchange Rates (Base: {baseCurrency})
      </div>
      <div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="exchange rates table">
              <TableHead>
                <TableRow>
                  {columns?.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align || "left"}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rateEntries ? (
                  <>
                    {rateEntries
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      ?.map(([currencyCode, rate]) => (
                        <TableRow hover tabIndex={-1} key={currencyCode}>
                          <TableCell>{currencyCode}</TableCell>
                          <TableCell align="right">
                            {rate.toLocaleString("en-US", {
                              minimumFractionDigits: 4,
                              maximumFractionDigits: 6,
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                  </>
                ) : (
                  <>
                    {" "}
                    <TableRow hover tabIndex={-1}>
                      <TableCell>No records</TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 50, 100, 200]}
            component="div"
            count={rateEntries.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};

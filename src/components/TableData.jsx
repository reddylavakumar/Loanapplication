import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// Define column structure
const columns = [
  { id: "month", label: "Month", minWidth: 80 },
  { id: "principal", label: "Principal", minWidth: 120, align: "right" },
  { id: "interest", label: "Interest", minWidth: 120, align: "right" },
  { id: "balance", label: "Remaining Balance", minWidth: 170, align: "right" },
];

// Amortization calculation function
function calculateAmortization(loanAmount, annualRate, termYears) {
  const monthlyRate = annualRate / 12 / 100;
  const totalPayments = termYears * 12;
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const schedule = [];
  let balance = loanAmount;

  for (let month = 1; month <= totalPayments; month++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance -= principal;

    schedule.push({
      month,
      principal: principal,
      interest: interest,
      balance: Math.max(balance, 0),
    });
  }

  return schedule;
}

export default function StickyHeadTable({
  loanAmount,
  interestRate,
  termYears,
  currency,
}) {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const amortizationRows = calculateAmortization(
    loanAmount,
    interestRate,
    termYears
  ).slice(0, 60);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="amortization table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {amortizationRows
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover tabIndex={-1} key={row.month}>
                  {columns.map((column) => {
                    let value = row[column.id];
                    if (typeof value === "number") {
                      value = value.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      });
                    }
                    return (
                      <TableCell key={column.id} align={column.align || "left"}>
                        {value} {column.id !== "month" ? currency : ""}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <TablePagination
        rowsPerPageOptions={[10, 20, 60]}
        component="div"
        count={amortizationRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

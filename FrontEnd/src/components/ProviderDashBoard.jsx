import React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const ProviderDashboard = () => {
  console.log("clicked");
  return (
    <>
      <CssBaseline />
      <Typography
        variant="h2"
        gutterBottom
        style={{
          fontSize: "36px",
          position: "fixed",
          top: "0",
          marginLeft: "190px",
        }}
      >
        Welcome,
      </Typography>
      <Box sx={{ width: "900px", marginLeft: "190px", marginBottom: "150px" }}>
        <Stack spacing={2}>
          <Item>
            <Typography
              variant="h2"
              gutterBottom
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "black",
                textAlign: "left",
              }}
            >
              Today's Appointments
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "600" }}>Time</TableCell>
                  <TableCell style={{ fontWeight: "600" }}>
                    Patient name
                  </TableCell>
                  <TableCell style={{ fontWeight: "600" }}>Reason</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </Item>
          <Item style={{ marginTop: "40px" }}>
            <Typography
              variant="h2"
              gutterBottom
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "black",
                textAlign: "left",
              }}
            >
              Recent Patients
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "600" }}>Name</TableCell>
                  <TableCell style={{ fontWeight: "600" }}>
                    Last Visit
                  </TableCell>
                  <TableCell style={{ fontWeight: "600" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default ProviderDashboard;

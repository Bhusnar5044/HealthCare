import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";

export const Appointments = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedDoctor, setSelectedDoctor] = React.useState("");

  const handleChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Card style={{ marginLeft: "220px", width: "1000px", height: "600px" }}>
      <CardContent>
        <Typography
          gutterBottom
          sx={{ fontSize: 28, color: "#0099d7", fontWeight: "600" }}
        >
          Book an Appointment
        </Typography>
        <FormControl
          sx={{ m: 1, minWidth: 120, display: "flex", width: "350px" }}
        >
          <InputLabel
            id="demo-controlled-open-select-label"
            sx={{ color: "#0099d7" }}
          >
            Select a Doctor
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={selectedDoctor}
            label="Select a Doctor"
            onChange={handleChange}
          >
            <MenuItem value="">Prashanth</MenuItem>
            <MenuItem value={10}>Hridesh</MenuItem>
            <MenuItem value={20}>Pradip</MenuItem>
            <MenuItem value={30}>Saravana</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 120, display: "flex", width: "350px" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </FormControl>
        <FormControl
          style={{ position: "absolute", top: "100px", marginRight: "30px" }}
        >
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            {[
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
            ].map((item, index) => (
              <Button key={index}>{item}</Button>
            ))}
          </ButtonGroup>
        </FormControl>
        <FormControl
          style={{ position: "absolute", top: "200px", marginRight: "30px" }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Reason for Visit"
            multiline
            rows={4}
            sx={{ width: "450px" }}
            defaultValue=""
          />
          <TextField
            id="outlined-multiline-static"
            label="Addition notes(Optional)"
            multiline
            rows={4}
            sx={{ width: "450px", paddingTop: "20px" }}
            defaultValue=""
          />

          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "20px" }}
          >
            Confirm Booking
          </Button>
        </FormControl>
      </CardContent>
    </Card>
  );
};

import { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BootstrapButton = styled(Button)({
  width: "100%",
  boxShadow: "none",
  borderRadius: "4px",
  textTransform: "none",
  fontSize: 16,
  padding: "10px",
  marginTop: "10px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#8bc63f",
  borderColor: "#8bc63f",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    try {
      const url = "https://fakestoreapi.com/products/1";
      const response = await axios.get(url);
      //   const data = await axios.post(url, {
      //     email,
      //     password,
      //   });
      console.log(response.data);
      localStorage.setItem("token", data?.token || null);
      navigate("/patientportal");
    } catch (e) {
      console.log("error is creating user");
    }
  };

  return (
    <div
      style={{
        minWidth: "300px",
        minHeight: "auto",
        border: "1px solid #000000",
        padding: "50px",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg"
          alt="bayerlogo"
          style={{ width: "80px", height: "auto" }}
        />
        <Typography variant="h5" color="#0099d7" style={{ fontWeight: "600" }}>
          Login
        </Typography>
        <TextField
          id="email"
          variant="outlined"
          value={email}
          margin="none"
          size="small"
          placeholder="Email"
          style={{ width: "100%" }}
        />
        <TextField
          id="password"
          variant="outlined"
          value={password}
          size="small"
          placeholder="Password"
          style={{ width: "100%" }}
        />
        <BootstrapButton
          variant="contained"
          disableRipple
          onClick={handleSubmit}
        >
          Bootstrap
        </BootstrapButton>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ color: "#0099d7" }}
        >
          Forgot Password?
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ color: "#0099d7" }}
        >
          New User? Register here
        </Typography>
      </Stack>
    </div>
  );
};

export default Login;

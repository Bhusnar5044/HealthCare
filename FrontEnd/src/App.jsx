import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProviderDashboard from "./components/ProviderDashBoard";
import { Sidebar } from "./components/Sidebar";
import Appointments from "./components/Appointments";
import Home from "./components/Home";
import PatientDashBoard from "./components/PatientDashBoard";

function App() {
  const [count, setCount] = useState(0);
  const providerSideBar = [
    {
      text: "Dashboard",
      nav: "Dashboard",
    },
    {
      text: "Patient List",
      nav: "Patient List",
    },
    {
      text: "Messages",
      nav: "Messages",
    },

    {
      text: "Appointments",
      nav: "Appointments",
    },
    {
      text: "Logout",
      nav: "Logout",
    },
  ];

  const patientSideBar = [
    {
      text: "Dashboard",
      nav: "Dashboard",
    },
    {
      text: "My Profile",
      nav: "My Profile",
    },
    {
      text: "Appointments",
      nav: "Appointments",
    },
    {
      text: "Health Records",
      nav: "Health Records",
    },
    {
      text: "Messages",
      nav: "Messages",
    },
    {
      text: "Logout",
      nav: "Logout",
    },
  ];

  const role = "D";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            element={
              <Sidebar
                navlist={role === "D" ? providerSideBar : patientSideBar}
              />
            }
          >
            <Route
              path="/Dashboard"
              element={
                role === "D" ? <ProviderDashboard /> : <PatientDashBoard />
              }
            />
            <Route path="Appointments" element={<Appointments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

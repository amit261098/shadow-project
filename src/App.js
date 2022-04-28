import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Dashboard";
import Started from "./pages/Started";
import Dashboard from "./pages/Dashboard";
import Calender from "./pages/Calender";

import Cards from "./pages/Cards";
import Embedded from "./pages/Embedded";
import Mlbased from "./pages/Mlbased";
import Datawrangling from "./pages/Datawrangling";
import Datastreaming from "./pages/Datastreaming";
import Etltesting from "./pages/Etltesting";
import Bigdata from "./pages/Bigdata";
import Devops from "./pages/Devops";
import Blreporting from "./pages/Blreporting";
import Sapdata from "./pages/Sapdata";

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/started" element={<Started />} ></Route>
          <Route path="/calendar" element={<Calender />} />
          <Route path="/user" element={<Blank />} />
          <Route path="/order" element={<Blank />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/mlbased" element={<Mlbased />} />
          <Route path="/datawrangling" element={<Datawrangling />} />
          <Route path="/datastreaming" element={<Datastreaming />} />
          
          <Route path="/etltesting" element={<Etltesting />} />
          <Route path="/bigdata" element={<Bigdata />} />
          <Route path="/devops" element={<Devops />} />
          <Route path="/blreporting" element={<Blreporting />} />
          <Route path="/sapdata" element={<Sapdata />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

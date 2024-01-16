import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Vans from "./components/vans/Vans.jsx";
import Footer from "./components/footer/Footer.jsx";
import VansDetails from "./components/vansDetails/VansDetails.jsx";

import Dashboard from "./components/host/Dashboard.jsx";
import Income from "./components/host/Income.jsx";
import Reviews from "./components/host/Reviews.jsx";

import Layout from "./components/layouts/Layout.jsx";
import HostLayout from "./components/layouts/HostLayout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<VansDetails />} />
        </Route>

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

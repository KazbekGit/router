import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Vans from "./components/vans/Vans.jsx";
import VansDetails from "./components/vansDetails/VansDetails.jsx";

import Dashboard from "./components/host/Dashboard.jsx";
import Income from "./components/host/Income.jsx";
import Reviews from "./components/host/Reviews.jsx";

import Layout from "./components/layouts/Layout.jsx";
import HostLayout from "./components/layouts/HostLayout.jsx";
import ListedVans from "./components/listedVans/ListedVans.jsx";
import ListedVansDetails from "./components/listedVansDetails/ListedVansDetails.jsx";
import Details from "./components/details/Details.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VansDetails />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<ListedVans />} />
          <Route path="vans/:id" element={<ListedVansDetails />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<p>pricing</p>} />
            <Route path="photos" element={<p>photos</p>} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

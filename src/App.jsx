import styles from "./App.module.scss";
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

const listedVans = [
  {
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    hostId: "123",
    id: "1",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
    name: "Modest Explorer",
    price: 60,
    type: "simple",
  },
  {
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    hostId: "123",
    id: "2",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
    name: "Beach Bum",
    price: 80,
    type: "rugged",
  },
  {
    description:
      "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
    hostId: "789",
    id: "5",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
    name: "The Cruiser",
    price: 120,
    type: "luxury",
  },
];
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
          <Route path="vans">
            <Route index element={<ListedVans />} />
            <Route path=":id" element={<ListedVansDetails  />} >
              <Route path="details" element={<p>details</p>}></Route>
              <Route path="pricing" element={<p>pricing</p>}></Route>
              <Route path="photos" element={<p>photos</p>}></Route>
            </Route>
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

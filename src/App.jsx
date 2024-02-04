import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";

import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Vans, { loader as vansLoader } from "./components/vans/Vans.jsx";
import VansDetails, {
  loader as vansDetailsloader,
} from "./components/vansDetails/VansDetails.jsx";

import Dashboard from "./components/host/Dashboard.jsx";
import Income from "./components/host/Income.jsx";
import Reviews from "./components/host/Reviews.jsx";

import Layout from "./components/layouts/Layout.jsx";
import HostLayout from "./components/layouts/HostLayout.jsx";
import ListedVans, {
  loader as listedVansLoader,
} from "./components/listedVans/ListedVans.jsx";
import ListedVansDetails, {
  loader as listedVansDetailsLoader,
} from "./components/listedVansDetails/ListedVansDetails.jsx";
import Details from "./components/details/Details.jsx";
import Error from "./Error.jsx";
import Login from "./components/login/Login.jsx";
import AuthRequired from "./components/AuthRequired.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route
        path="vans/:id"
        element={<VansDetails />}
        loader={vansDetailsloader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<ListedVans />} loader={listedVansLoader} />
        <Route
          path="vans/:id"
          element={<ListedVansDetails />}
          loader={listedVansDetailsLoader}
        >
          <Route index element={<Details />} />
          <Route path="pricing" element={<p>pricing</p>} />
          <Route path="photos" element={<p>photos</p>} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

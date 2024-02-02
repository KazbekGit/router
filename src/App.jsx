import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Vans, { loader } from "./components/vans/Vans.jsx";
import VansDetails from "./components/vansDetails/VansDetails.jsx";

import Dashboard from "./components/host/Dashboard.jsx";
import Income from "./components/host/Income.jsx";
import Reviews from "./components/host/Reviews.jsx";

import Layout from "./components/layouts/Layout.jsx";
import HostLayout from "./components/layouts/HostLayout.jsx";
import ListedVans from "./components/listedVans/ListedVans.jsx";
import ListedVansDetails from "./components/listedVansDetails/ListedVansDetails.jsx";
import Details from "./components/details/Details.jsx";
import Error from "./Error.jsx";
import Login from "./components/login/Login.jsx";
import AuthRequired from "./components/AuthRequired.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route element=<AuthRequired /> loader={
        async () => {
          
        }
      }>
        <Route path="vans" element={<Vans />} loader={loader} />
        <Route path="vans/:id" element={<VansDetails />} />
      </Route>

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
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./HostLayout.module.scss";

const HostLayout = () => {

  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to="/host"
          end
          className={({ isActive }) => {
            return isActive ? styles.active : null;
          }}
        >
          dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => {
            return isActive ? styles.active : null;
          }}
        >
          income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => {
            return isActive ? styles.active : null;
          }}
        >
          reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;

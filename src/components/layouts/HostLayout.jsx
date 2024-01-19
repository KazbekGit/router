import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./HostLayout.module.scss";

const HostLayout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to="."
          end
          className={({ isActive }) => {
            return isActive ? styles.active : null;
          }}
        >
          dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => {
            return isActive ? styles.active : null;
          }}
        >
          income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => {
            return isActive ? styles.active : null;
          }}
        >
          vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => {
            return isActive ? styles.active : null;
          }}
        >
          reviews
        </NavLink>
      </nav>
      <div className={styles.main}>
        <Outlet />
      </div>
    </>
  );
};

export default HostLayout;

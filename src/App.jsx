import styles from "./App.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Vans from "./components/vans/Vans.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

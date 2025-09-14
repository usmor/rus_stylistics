import styles from "./app.module.css";
import { Header } from "../header/header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Menu } from "../menu/menu";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.app}>
      <Header onMenuClick={handleMenuOpen} />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/search" element={<div>Search Page</div>} />
          <Route path="*" element={<p>ошибка</p>}></Route>
        </Routes>

        {isMenuOpen && <Menu onClose={handleMenuClose} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;

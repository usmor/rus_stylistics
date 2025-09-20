import styles from "./app.module.css";
import { Header } from "../header/header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Menu } from "../menu/menu";
import { useEffect, useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#menu") {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [location.hash]);

  const handleMenuOpen = () => {
    navigate(`${location.pathname}${location.search}#menu`, { replace: true });
  };

  const handleMenuClose = () => {
    if (location.hash === "#menu") {
      navigate(`${location.pathname}${location.search}`, { replace: true });
    }
  };

  useEffect(() => {
    setIsMenuOpen(location.hash === "#menu");
  }, [location.hash]);

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

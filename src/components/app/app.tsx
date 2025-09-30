import styles from "./app.module.css";
import { Header } from "../header/header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../footer/footer";
import React, { Suspense, useEffect, useState } from "react";
import NotFound404 from "../../pages/not-found-404/not-found-404";
import { ScrollToTop } from "../scroll-to-top/scroll-to-top";

const Menu = React.lazy(
  () => import(/* webpackChunkName: "menu" */ "../menu/menu"),
);

const MainPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "main-page" */ "../../pages/main-page/main-page"
    ),
);

const TeamPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "team-page" */ "../../pages/team-page/team-page"
    ),
);

const AllArticlesPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "team-page" */ "../../pages/all-articles/all-articles"
    ),
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
        <Suspense fallback={<div>Загрузка...</div>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFound404 />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/all-articles" element={<AllArticlesPage />} />
          </Routes>

          {isMenuOpen && <Menu onClose={handleMenuClose} />}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;

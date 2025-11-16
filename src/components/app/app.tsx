import styles from "./app.module.css";
import { Header } from "../header/header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../footer/footer";
import React, { Suspense, useEffect, useMemo, useState } from "react";
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
      /* webpackChunkName: "all-articles" */ "../../pages/all-articles/all-articles"
    ),
);

const SectionPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "section-page" */ "../../pages/section-page/section-page"
    ),
);

const ArticlePage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "article-page" */ "../../pages/article-page/article-page"
    ),
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Закрываем меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
            <Route path="/sections/:id" element={<SectionPage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
          </Routes>
          {isMenuOpen && <Menu onClose={handleMenuClose} />}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;

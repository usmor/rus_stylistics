import styles from "./app.module.css";
import { Header } from "../header/header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../footer/footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <Routes>
          {/* <Route path="/search" element={<div>Search Page</div>} /> */}
          {/* <Route path="/menu" element={<div>Menu Page</div>} /> */}
          {/* <Route path="/team" element={<div>Team Page</div>} /> */}
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="*" element={<p>ошибка</p>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

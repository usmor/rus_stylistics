import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./not-found-404.module.css";

const NotFound404: FC = () => (
  <div className={styles.errorContainer}>
    <div className={styles.errorContent}>
      <h2 className={styles.title}>Ошибка 404</h2>
      <p className={styles.message}>
        Проверьте URL или вернитесь на{" "}
        <Link to="/" className={styles.link}>
          [главную страницу]
        </Link>
      </p>
    </div>
    <div className={styles.svgContainer}>
      <svg
        className={styles.icon}
        viewBox="0 0 696 571"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 568c59.338-37.79 364.58-183.151 424.327-220.105 24.232-14.987 44.297-34.131 64.932-53.88 36.416-34.852 86.877-93.495 93.088-145.251 2.185-18.211 1.187-37.243-2.23-55.209-16.03-97.7-87.074-95.052-113.564-87.009-50.071 15.203-29.992 191.623-56.455 146.48-17.651-30.112-74.944-128.392-140.775-104.91-22.394 6.774-42.585 33.518-44.839 55.951-3.035 30.198 4.712 60.388 22.087 86.136 24.703 36.609 53.4 73.285 88.583 100.189 25.44 19.454 52.46 37.118 78.747 55.405 31.707 22.057 66.112 41.915 96.08 66.791C533.979 430.019 693.554 561.761 715.591 568" />
      </svg>
    </div>
  </div>
);

export default NotFound404;

import { FC, ReactNode } from "react";
import styles from "./question.module.css";

interface QuestionProps {
  children: ReactNode;
}

export const Question: FC<QuestionProps> = ({ children }) => {
  return (
    <section className={styles.questionBlock}>
      <h3 className={styles.questionBlockTitle} id={"specific-question"}>
        Конкретный вопрос
      </h3>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

import { FC } from "react";
import styles from "./main-page.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";
import SEO from "../../components/seo/seo";
import { IMainPage } from "./type";

export const MainPageUI: FC<IMainPage> = ({ sections }) => {
  return (
    <>
      <SEO
        title="Справочник по практической стилистики русского языка"
        description="Проект «Стилистика русского языка» создан для того, чтобы сделать знания по грамматике и семантике более доступными для всех, кто работает с речью — будь то студенты, журналисты, редакторы или преподаватели. Главная задача проекта — ответить на вопрос «Какой вариант конструкции является нормативным и более удачным с коммуникативной точки зрения?» В справочнике вы найдете информацию о сложных случаях употребления разных языковых единиц. Материал представлен в доступной форме и не требует специальных лингвистических знаний. А каждая статья будет сопровождаться наглядными примерами, что поможет лучше понять критерии выбора тех или иных языковых конструкций. Особое внимание уделяется новым и актуальным проблемам грамматики и семантики русского языка, которые не освещены в традиционных учебниках, но важны для носителей языка."
        keywords="русский язык, стилистика, справочник, лексика, грамматические формы, синтаксис"
        type="website"
        name={"Справочник по практической стилистики русского языка"}
      />
      <section className={styles.about}>
        <h2 className={styles.sectionTitle} id="about">
          О проекте
        </h2>
        <div className={styles.sectionText}>
          <p className={styles.sectionTextParagraph}>
            Проект «Стилистика русского языка» создан для того, чтобы сделать
            знания по грамматике и семантике более доступными для всех, кто
            работает с речью — будь то студенты, журналисты, редакторы или
            преподаватели.
          </p>
          <p className={styles.sectionTextParagraph}>
            Главная задача проекта — ответить на вопрос «Какой вариант
            конструкции является нормативным и более удачным с коммуникативной
            точки зрения?»
          </p>
          <p className={styles.sectionTextParagraph}>
            В справочнике вы найдете информацию о сложных случаях употребления
            разных языковых единиц. Материал представлен в доступной форме и не
            требует специальных лингвистических знаний. А каждая статья будет
            сопровождаться наглядными примерами, что поможет лучше понять
            критерии выбора тех или иных языковых конструкций.
          </p>
          <p className={styles.sectionTextParagraph}>
            Особое внимание уделяется новым и актуальным проблемам грамматики и
            семантики русского языка, которые не освещены в традиционных
            учебниках, но важны для носителей языка.
          </p>
        </div>
      </section>

      <section className={styles.tableOfContents}>
        <h2 className={styles.sectionTitle} id="sections">
          Разделы
        </h2>
        <ul className={styles.tableList}>
          {sections.map((section) => (
            <li key={section.id} className={styles.tableListItem}>
              <Link
                to={`/sections/${section.id}`}
                className={styles.sectionCard}
              >
                <h3 className={styles.sectionCardTitle}>{section.section}</h3>
                <p className={styles.sectionTextParagraph}>
                  {section.shortDescription}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.faq} id="faq">
        <h2 className={styles.sectionTitle}>Вопросы и ответы</h2>
        <ul className={styles.faqList}>
          <li className={styles.faqListItem}>
            <details className={styles.question}>
              <summary className={styles.questionSummary}>
                <svg
                  className={styles.questionSummaryIcon}
                  width={24}
                  height={15}
                  viewBox="0 0 34 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19L1.41688e-06 2.79276L2.92937 1.09842e-06L17 13.4145L31.0706 3.5586e-06L34 2.79276L17 19Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className={styles.questionSummaryTitle} id="who">
                  Кто разрабатывает Справочник?
                </h3>
              </summary>
              <div className={clsx(styles.sectionText, styles.questionAnswer)}>
                <p className={styles.sectionTextParagraph}>
                  Команда проекта – это инициативная группа студентов и
                  преподавателей Школы лингвистики Высшей Школы Экономики,
                  которая готовит статьи, объясняющие в доступной форме
                  стилистические вариативности в современном русском языке.
                  Простота языка авторов помогает сделать материал понятным для
                  тех, кто ни разу в жизни не сталкивался с лингвистикой.
                </p>
                <p className={styles.sectionTextParagraph}>
                  Подробнее об участниках можно почитать на соответствующей{" "}
                  <Link to="/team" className={styles.paragraphLink}>
                    странице
                  </Link>
                  .
                </p>
              </div>
            </details>
          </li>

          <li className={styles.faqListItem}>
            <details className={styles.question}>
              <summary className={styles.questionSummary}>
                <svg
                  className={styles.questionSummaryIcon}
                  width={24}
                  height={15}
                  viewBox="0 0 34 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19L1.41688e-06 2.79276L2.92937 1.09842e-06L17 13.4145L31.0706 3.5586e-06L34 2.79276L17 19Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className={styles.questionSummaryTitle}>
                  Как устроена статья в Cправочнике?
                </h3>
              </summary>
              <div className={clsx(styles.sectionText, styles.questionAnswer)}>
                <p className={styles.sectionTextParagraph}>
                  Каждая глава в справочнике состоит из 6 секций.
                </p>
                <ol className={styles.sectionList}>
                  <li className={styles.sectionListItem}>
                    <p className={styles.sectionTextParagraph}>
                      <span className={styles.accentText}>Введение</span> дает
                      общее представление о теме.
                    </p>
                  </li>
                  <li className={styles.sectionListItem}>
                    <p className={styles.sectionTextParagraph}>
                      <span className={styles.accentText}>
                        Конкретный вопрос
                      </span>
                      , на который отвечает глава.
                    </p>
                  </li>
                  <li className={styles.sectionListItem}>
                    <p className={styles.sectionTextParagraph}>
                      <span className={styles.accentText}>Краткий ответ</span>{" "}
                      для тех, кто спешит.
                    </p>
                  </li>
                  <li className={styles.sectionListItem}>
                    <p className={styles.sectionTextParagraph}>
                      <span className={styles.accentText}>
                        Описание языковой реальности
                      </span>{" "}
                      поможет лучше понять особенности рассматриваемой
                      вариативности.
                    </p>
                  </li>
                  <li className={styles.sectionListItem}>
                    <p className={styles.sectionTextParagraph}>
                      <span className={styles.accentText}>
                        Развернутый ответ
                      </span>{" "}
                      с подробным изложением информации, включая аргументы,
                      примеры и дополнительные детали.
                    </p>
                  </li>
                  <li className={styles.sectionListItem}>
                    <p className={styles.sectionTextParagraph}>
                      <span className={styles.accentText}>
                        Список литературы
                      </span>{" "}
                      для дополнительного изучения темы.
                    </p>
                  </li>
                </ol>
              </div>
            </details>
          </li>

          <li className={styles.faqListItem}>
            <details className={styles.question}>
              <summary className={styles.questionSummary}>
                <svg
                  className={styles.questionSummaryIcon}
                  width={24}
                  height={15}
                  viewBox="0 0 34 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19L1.41688e-06 2.79276L2.92937 1.09842e-06L17 13.4145L31.0706 3.5586e-06L34 2.79276L17 19Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className={styles.questionSummaryTitle} id="quote">
                  Как ссылаться на материалы проекта?
                </h3>
              </summary>
              <div className={clsx(styles.sectionText, styles.questionAnswer)}>
                <p className={styles.sectionTextParagraph}>
                  Каждая статья в Справочнике принадлежит отдельному автору.
                  При&nbsp;использовании материалов проекта, пожалуйста,
                  ссылайтесь на автора и на сайт.
                </p>
                <p
                  className={clsx(
                    styles.sectionTextParagraph,
                    styles.reference,
                  )}
                >
                  Е. Картова. Употребление дискурсивного слова «кстати» //
                  Справочник по&nbsp;практической стилистики русского языка.{" "}
                  <a
                    href="https://rus_stylistics.ru"
                    className={styles.paragraphLink}
                  >
                    https://rus_stylistics.ru
                  </a>
                </p>
              </div>
            </details>
          </li>

          <li className={styles.faqListItem}>
            <details className={styles.question}>
              <summary className={styles.questionSummary}>
                <svg
                  className={styles.questionSummaryIcon}
                  width={24}
                  height={15}
                  viewBox="0 0 34 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19L1.41688e-06 2.79276L2.92937 1.09842e-06L17 13.4145L31.0706 3.5586e-06L34 2.79276L17 19Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className={styles.questionSummaryTitle} id="address">
                  Как связаться с редакцией Cправочника?
                </h3>
              </summary>
              <div className={clsx(styles.sectionText, styles.questionAnswer)}>
                <p className={styles.sectionTextParagraph}>
                  Чтобы предложить свои материалы или сообщить об ошибке,
                  напишите электронное письмо по адресу{" "}
                  <a
                    href="mailto:rus_stylistics@yandex.ru"
                    className={styles.paragraphLink}
                  >
                    rus_stylistics@yandex.ru{" "}
                  </a>
                  .
                </p>
              </div>
            </details>
          </li>
        </ul>
      </section>
    </>
  );
};

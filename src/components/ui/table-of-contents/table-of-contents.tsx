import { FC } from "react";
import styles from "./table-of-contents.module.css";
import { HashLink } from "react-router-hash-link";

interface TableOfContentsUIProps {
  headings: Array<{
    id: string;
    text: string;
  }>;
}
export const TableOfContentsUI: FC<TableOfContentsUIProps> = ({ headings }) => {
  return (
    <nav className={styles.tableOfContent}>
      <ul className={styles.headingsList}>
        {headings.map((heading) => (
          <li key={heading.id} className={styles.headingItem}>
            <HashLink
              smooth
              to={`#${heading.id}`}
              className={styles.headingLink}
            >
              {heading.text}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

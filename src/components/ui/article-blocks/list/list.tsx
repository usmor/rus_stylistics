import { FC, ReactNode } from "react";
import styles from "./list.module.css";
import clsx from "clsx";

interface ListProps {
  type?: "ul" | "ol";
  items: ReactNode[];
}

export const List: FC<ListProps> = ({ type = "ul", items }) => {
  const ListTag = type;

  return (
    <ListTag className={clsx(styles.list, styles[`${type}`])}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
};

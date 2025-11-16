import { FC, useEffect, useState } from "react";
import { TableOfContentsUI } from "../ui/table-of-contents/table-of-contents";

interface Heading {
  id: string;
  text: string;
}

export const TableOfContents: FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const headingElements = document.querySelectorAll("h3");
      const headingsArray = Array.from(headingElements).map((heading) => ({
        id: heading.id,
        text: heading.textContent || heading.innerText,
      }));
      setHeadings(headingsArray);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <TableOfContentsUI headings={headings} />;
};

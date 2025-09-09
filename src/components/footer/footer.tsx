import { FC } from "react";
import { FooterUI } from "../ui/footer/footer";

export const Footer: FC = () => {
  const initialYear = 2020;
  const currentYear = new Date().getFullYear();
  const copyright =
    initialYear === currentYear
      ? `${initialYear}`
      : `${initialYear}-${currentYear}`;

  return <FooterUI copyright={copyright} />;
};

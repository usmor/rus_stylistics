import { memo } from "react";
import { HeaderUI } from "../ui/header/header";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = memo(({ onMenuClick }: HeaderProps) => {
  return <HeaderUI onMenuClick={onMenuClick} />;
});

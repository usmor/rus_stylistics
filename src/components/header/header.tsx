import { HeaderUI } from "../ui/header/header";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return <HeaderUI onMenuClick={onMenuClick} />;
};

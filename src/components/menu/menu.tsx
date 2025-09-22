import { MenuUI } from "../ui/menu/menu";
import { FC, memo, useEffect } from "react";
import ReactDOM from "react-dom";
import { MenuProps } from "./type";

const modalRoot = document.getElementById("menu");

const Menu: FC<MenuProps> = memo(({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <MenuUI onClose={onClose} />,
    modalRoot as HTMLDivElement,
  );
});

export default Menu;

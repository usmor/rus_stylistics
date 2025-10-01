import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { selectSections } from "../../services/handbookSlice/slice";
import { MainPageUI } from "./main-page-ui";

const MainPage: FC = () => {
  const sections = useSelector((state: RootState) => selectSections(state));

  return <MainPageUI sections={sections} />;
};

export default MainPage;

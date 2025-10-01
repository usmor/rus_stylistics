import { FC } from "react";
import { SectionPageUI } from "./section-page-ui";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { selectSections } from "../../services/handbookSlice/slice";

const SectionPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const sectionData = useSelector((state: RootState) =>
    selectSections(state),
  ).filter((section) => section.id === id)[0];

  return (
    <SectionPageUI
      title={sectionData.section}
      description={sectionData.description}
      articles={sectionData.subsections}
    />
  );
};

export default SectionPage;

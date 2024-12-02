import { MainSection, SectionHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => {
  // Sprawdzamy, czy tytuł zawiera słowo "Herbata"
  const isCentered = title.toLowerCase().includes("herbata");

  return (
    <MainSection>
      <SectionHeader centered={isCentered}>
        {title}
        {extraHeaderContent}
      </SectionHeader>
      {body}
    </MainSection>
  );
};

export default Section;

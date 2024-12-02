import { MainSection, SectionHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent, centered = false }) => (
  <MainSection>
    <SectionHeader centered={centered}>
      {title}
      {extraHeaderContent}
    </SectionHeader>
    {body}
  </MainSection>
);

export default Section;

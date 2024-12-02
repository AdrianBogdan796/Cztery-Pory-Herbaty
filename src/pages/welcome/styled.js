import styled from "styled-components";

export const WelcomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
  padding: 20px;
`;

export const WelcomeButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

// Dodajemy eksport Paragraph
export const Paragraph = styled.p`
  width: 80%; /* Zmniejsza szerokość akapitu */
  max-width: 800px; /* Maksymalna szerokość akapitu */
  margin: 0 auto 20px; /* Wyśrodkowuje akapit i dodaje margines poniżej */
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

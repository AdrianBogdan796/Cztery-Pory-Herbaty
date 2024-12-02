import React from "react";
import { Link } from "react-router-dom";
import { WelcomePageContainer, WelcomeButton } from "./styled"; // Zaimportuj style

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <h1>Witaj serdecznie na mojej stronie.</h1>
      <p>Wybierz kategorię, aby kontynuować:</p>
      <Link to="/start">
        <WelcomeButton>Rozpocznij</WelcomeButton>
      </Link>
    </WelcomePageContainer>
  );
};

export default WelcomePage;

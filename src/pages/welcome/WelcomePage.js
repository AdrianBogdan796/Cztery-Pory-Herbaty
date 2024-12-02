import React from "react";
import { Link } from "react-router-dom";
import { WelcomePageContainer, WelcomeButton, Paragraph } from "./styled"; // Zaimportuj styl Paragraph

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <h1>Zaparz filiżankę i zaczytaj się!</h1>
      <Paragraph>
        Herbata to nie tylko napój – to cały świat, który odkrywamy z każdą
        filiżanką. Czy wiedziałeś, że na świecie istnieje ponad 3 tysiące
        rodzajów herbaty? Każdy z nich ma swoją własną historię i unikalny
        charakter. Od chińskiej herbaty pu-erh, przez japońskie matcha, poprzez
        angielską tradycję five o’clock tea – każda filiżanka opowiada historię
        o kulturze, tradycjach i ludziach.
      </Paragraph>
      <Paragraph>
        Herbata to powszechnie znany i lubiany napój z długą historią. Po raz
        pierwszy stała się znana światu zachodniemu za pośrednictwem
        portugalskich księży i chińskich kupców na początku XVI wieku. Na tej
        stronie znajdziesz informacje o jej konkretnym pochodzeniu, sposobach
        przetwarzania i tworzenia liści do parzenia napojów oraz specyfikacje
        dotyczące konkretnych jej rodzajów.
      </Paragraph>
      <Link to="/start">
        <WelcomeButton>Rozpocznij</WelcomeButton>
      </Link>
    </WelcomePageContainer>
  );
};

export default WelcomePage;

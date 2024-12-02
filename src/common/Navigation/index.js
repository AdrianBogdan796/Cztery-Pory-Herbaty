import { toFrom, toProces, toTea } from "../../routes";
import { NavItem, Nav, StyledNavLink, NavList } from "./styled";

export const Navigation = () => (
  <Nav>
    <NavList>
      <NavItem>
        <StyledNavLink to={toFrom()}>Pochodzenia Herbaty</StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to={toProces()}>Proces Przetwarzania</StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to={toTea()}>Rodzaje Herbat</StyledNavLink>
      </NavItem>
    </NavList>
  </Nav>
);

import { toStart, toProces, toTea } from "../../routes";
import { NavItem, Nav, StyledNavLink, NavList } from "./styled";

export const Navigation = () => (
  <Nav>
    <NavList>
      <NavItem>
        <StyledNavLink to={toStart()}>Pochodzenia Herbat</StyledNavLink>
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

import Link from "next/link";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <h1>Recipes</h1>
      <StyledNav>
        <StyledLink href="/">home</StyledLink>
        <StyledLink href="/veggie">veggie</StyledLink>
        <StyledLink href="/dessert">dessert</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9f8772;
  text-transform: uppercase;

  &:hover {
    color: #665a48;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c8dbbe;
  padding: 0 1rem;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export default Header;

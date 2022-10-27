import Link from "next/link";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <h1>Recipes</h1>
      <StyledNav>
        <Link href="/" passHref legacyBehavior>
          <StyledAnchor>home</StyledAnchor>
        </Link>
        <Link href="/veggie" passHref legacyBehavior>
          <StyledAnchor>veggie</StyledAnchor>
        </Link>
        <Link href="/dessert" passHref legacyBehavior>
          <StyledAnchor>dessert</StyledAnchor>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

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
const StyledAnchor = styled.a`
  text-decoration: none;
  color: #9f8772;
  text-transform: uppercase;

  &:hover {
    color: #665a48;
  }
`;

export default Header;

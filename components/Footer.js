import styled from "styled-components";

function Footer() {
  return (
    <Styledfooter>
      <p>This is my footer</p>
    </Styledfooter>
  );
}

const Styledfooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c8dbbe;
  padding: 0 1rem;
  height: 3rem;
`;

export default Footer;

import styled from "styled-components";

export const FooterBase = styled.footer`
  background: var(--black);

  /* position: absolute;
  bottom: 0; */

  border-top: 2px solid var(--primary);
  padding: 32px 16px;

  color: var(--white);
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

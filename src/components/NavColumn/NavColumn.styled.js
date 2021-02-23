import styled from "styled-components"

export const StyledNavColumn = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    marign: 0;

    a {
      text-decoration: none;

      p {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`

import styled from "styled-components"

export const StyledNavRow = styled.nav`
  display: none;

  ul {
    list-style-type: none;
    padding: 0;
    marign: 0;
    display: flex;

    a {
      text-decoration: none;

      p {
        font-size: 1rem;
        padding-left: 20px;
        margin: 0;
      }
    }
  }

  ${({ theme }) => theme.media.tablet} {
    display: inline-block;
  }
`

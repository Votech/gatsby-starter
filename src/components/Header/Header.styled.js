import styled from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 10;
`

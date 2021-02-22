import styled from "styled-components"

const H1 = styled.h1`
  color: ${({ white, theme }) =>
    white ? theme.colors.white : theme.colors.black};
  margin: 0 0 12px 0;
`

export default H1

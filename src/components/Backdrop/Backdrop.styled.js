import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const StyledBackdrop = styled.div`
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  z-index: 3;
  animation-name: ${({ open }) => (open ? fadeIn : fadeOut)};
  animation-duration: 0.3s;
  animation-fill-mode: backwards;

  display: ${({ open }) => (open ? "inline-block" : "none")};

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`

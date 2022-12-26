import React from "react";
import styled from "styled-components";
import { StyledButton } from "../pages/home";

const MiniAbout = () => {
  return (
    <MiniAboutContainer>
      <h3>About us</h3>
      <h1>Welcome to our school</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sqit consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt.
      </p>
      <StyledButton>Learn more</StyledButton>
      <img src="/assets/about-img.png" alt="" height={200} />
    </MiniAboutContainer>
  );
};

const MiniAboutContainer = styled.div`
  width: 100%;
  margin: 4rem 0;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.secondaryColor};
  }

  h1,
  h3,
  p,
  button {
    margin: 10px 0;
    text-align: center;
  }

  p {
    color: #9796ac;
    width: 70%;
    line-height: 1.5rem;
  }

  h1 {
    font-size: 3rem;
  }
`;

export default MiniAbout;

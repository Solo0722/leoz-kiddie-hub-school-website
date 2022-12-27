import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <h1>About Leo'Z</h1>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default About;

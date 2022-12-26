import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import Faqs from "../components/Faqs";
import MiniAbout from "../components/MiniAbout";
import Services from "../components/Services";
import { services } from "../shared/utils/data";

const Home = () => {
  return (
    <HomeWrapper>
      <WelcomeContainer>
        <div>
          <h2>Welcome To</h2>
          <h1>Leo'z Kiddie Hub School</h1>
          <p>"Your ultimate caregivers."</p>
          <StyledButton>Contact us</StyledButton>
        </div>
      </WelcomeContainer>
      <MainBodyContainer>
        <MiniAbout />
        <Services />
        {/* <TestimonialsContainer></TestimonialsContainer> */}
        <Faqs />
        <Contact />
      </MainBodyContainer>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
`;

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  color: #fff;
  background-image: linear-gradient(to right, #ae44dc, transparent),
    url("/assets/kids.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  div {
    width: 60%;
  }

  h1,
  h2,
  p {
    margin: 1rem 0;
  }

  p {
    width: 90%;
    font-family: "Lobster Two", "Raleway", sans-serif;
    font-size: 1.2rem;
    font-style: italic;
  }
  h1 {
    font-size: 3rem;
  }
`;

export const StyledButton = styled(Button)`
  min-width: 130px;
  height: 50px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  /* border-radius: 5px; */
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.primaryColor};

  &:hover {
    background: #fff;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

const MainBodyContainer = styled.div`
  width: 100%;
  background-image: url("/assets/bg.svg");
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 4rem;
`;

export default Home;

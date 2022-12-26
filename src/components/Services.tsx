import React from "react";
import styled from "styled-components";
import { services } from "../shared/utils/data";

const Services = () => {
  return (
    <ServicesContainer>
      <h3 className="title">Our Services</h3>
      <h1>Why choose us</h1>
      <div className="services-wrapper">
        {services.map((service) => (
          <ServiceCard>
            <img src="/assets/service1.svg" alt="" />
            <h3>{service.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eius, esse iusto a voluptates reprehenderit sit
            </p>
          </ServiceCard>
        ))}
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  width: 100%;
  margin: 4rem 0;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: ${({ theme }) => theme.secondaryColor};
  }
  h1,
  h3,
  p {
    margin: 10px 0;
    text-align: center;
  }

  .desc {
    color: #9796ac;
    width: 70%;
    line-height: 1.5rem;
  }
  h1 {
    font-size: 3rem;
  }

  & .services-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const ServiceCard = styled.div`
  width: 30%;
  min-height: 250px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #eceff8;
  border-radius: 5px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-box-shadow: 0 0 21px 0 rgb(152 152 152 / 23%);
    -moz-box-shadow: 0 0 21px 0 rgba(152, 152, 152, 0.23);
    box-shadow: 0 0 21px 0 rgb(152 152 152 / 23%);
  }

  p {
    color: #9796ac;
    font-weight: 0.7rem;
    line-height: 1.3rem;
  }
`;

export default Services;

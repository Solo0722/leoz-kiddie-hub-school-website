import React from "react";
import styled from "styled-components";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { faqs } from "../shared/utils/data";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faqs = () => {
  return (
    <FaqsContainer>
      <h1>Frequently Asked Questions</h1>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        expandIconPosition="end"
        className="site-collapse-custom-collapse"
      >
        {faqs.map((faq, i) => (
          <Panel
            header={<h3>{faq.question}</h3>}
            key={i}
            className="site-collapse-custom-panel"
          >
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </FaqsContainer>
  );
};

const FaqsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 4rem 0;
  padding: 4rem;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p,
  button {
    margin: 10px 0;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    color: #fff;
  }

  && .site-collapse-custom-collapse {
    width: 70%;
    margin: 2rem auto;
    background-color: transparent;
  }

  && .site-collapse-custom-panel {
    color: #fff;
    border: none;
    background-color: #11111112;
    backdrop-filter: blur(100px);
    margin: 1rem 0;
  }

  && .site-collapse-custom-panel header {
    color: #fff;
  }
  && .site-collapse-custom-panel p,
  h3 {
    color: #fff;
    text-align: left;
  }
`;

export default Faqs;

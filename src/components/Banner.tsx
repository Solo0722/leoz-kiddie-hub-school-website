import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <BannerWrapper>
      <ContactWrapper>
        <div>
          <StyledIconButton icon={<HiOutlinePhone />} shape="circle" />
          &nbsp;+233 (0) 246756070 / +233 (0) 208467112
        </div>
        <div>
          <StyledIconButton icon={<HiOutlineMail />} shape="circle" />
          &nbsp;leozkiddiehub@gmail.com
        </div>
      </ContactWrapper>
      <SocialLinksWrapper>
        <StyledIconButton
          icon={<FaFacebookF />}
          shape="circle"
          style={{ marginLeft: "15px" }}
        />
        <StyledIconButton
          icon={<FaTwitter />}
          shape="circle"
          style={{ marginLeft: "15px" }}
        />
        <StyledIconButton
          icon={<FaLinkedin />}
          shape="circle"
          style={{ marginLeft: "15px" }}
        />
      </SocialLinksWrapper>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  padding: 10px 4rem;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Inter Tight", sans-serif;
  font-size: 0.9rem;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
  }
`;
const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.body};
  display: grid;
  place-items: center;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export default Banner;

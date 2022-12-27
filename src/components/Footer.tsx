import { Button, Divider } from "antd";
import React from "react";
import MapPicker from "react-google-map-picker";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import styled from "styled-components";

const Footer = () => {
  const DefaultLocation = { lat: 6.696352, lng: -1.551585 };

  return (
    <FooterContainer>
      <Wrapper>
        <div className="sch">
          <img src="/assets/logo.svg" alt="" />
          <p>Leo'z Kiddie Hub School</p>
          <div className="contactInfo">
            <div>
              <Button type="primary" icon={<HiOutlinePhone />} shape="circle" />
              <span>+233 (0) 246756070</span>
            </div>
            <div>
              <Button
                type="primary"
                icon={<HiOutlineLocationMarker />}
                shape="circle"
              />
              <span>Nsenie, Near Nsenie Pharmacy</span>
            </div>
            <div>
              <Button type="primary" icon={<HiOutlineMail />} shape="circle" />
              <span>leoz@gmail.com</span>
            </div>
          </div>
          <div className="socialLinks">
            <Button type="primary" icon={<FaFacebookF />} />
            <Button type="primary" icon={<FaLinkedinIn />} />
            <Button type="primary" icon={<FaTwitter />} />
            <Button type="primary" icon={<FaInstagram />} />
          </div>
        </div>
        <div className="map-wrapper">
          <MapPicker
            defaultLocation={DefaultLocation}
            zoom={18}
            style={{ height: "400px" }}
            apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
          />
        </div>
      </Wrapper>
      <Divider />
      <div className="citation">
        <cite>
          <a href="http://oasolomon.vercel.app" target={"_blank"}>
            Designed and developed by OAS
          </a>
        </cite>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-image: url("/assets/footer-bg.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;

  & .citation {
    text-align: center;
    color: #535f85;
  }

  & .citation a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & .sch {
    margin: 1rem;
    width: 48%;
  }

  & .sch img {
    margin-bottom: 1rem;
  }

  & .sch p {
    line-height: 1.5rem;
  }

  & .contactInfo div {
    margin: 1rem 0;
  }

  & .contactInfo span {
    margin-left: 10px;
  }

  & .contactInfo button {
    background: #535f85;
    color: #fff;
  }

  & .socialLinks button {
    background: #535f85;
    margin: 1rem 1rem 1rem 0;
    color: #fff;
  }

  & .map-wrapper {
    width: 48%;
    border-radius: 7px;
  }
`;

export default Footer;

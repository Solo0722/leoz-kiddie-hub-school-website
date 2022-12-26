import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateTo = (url: string) => {
    navigate(url);
  };

  return (
    <NavWrapper>
      <img src="/assets/logo.svg" alt="logo"/>
      <ul>
        <li
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => navigateTo("/")}
        >
          Home
        </li>
        <li
          className={location.pathname === "/about-us" ? "active" : ""}
          onClick={() => navigateTo("/about-us")}
        >
          About us
        </li>
        <li
          className={location.pathname === "/staff" ? "active" : ""}
          onClick={() => navigateTo("/staff")}
        >
          Staff
        </li>
        <li
          className={location.pathname === "/admissions" ? "active" : ""}
          onClick={() => navigateTo("/admissions")}
        >
          Admissions
        </li>
        <li
          className={location.pathname === "/gallery" ? "active" : ""}
          onClick={() => navigateTo("/gallery")}
        >
          Gallery
        </li>
      </ul>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 70px;
  padding: 10px 4rem;
  background-color: ${({ theme }) => theme.body};
  -webkit-box-shadow: 0px 20px 50px 0px rgb(0 0 0 / 5%);
  box-shadow: 0px 20px 50px 0px rgb(0 0 0 / 5%);
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    padding: 10px;
    margin-left: 1rem;
    cursor: pointer;
  }

  .active {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export default Navbar;

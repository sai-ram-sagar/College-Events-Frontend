import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUniversity,
  faSignOutAlt,
  faLightbulb,
  faBars,
  faTimes,
  faHeart,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setMenuOpen(false); // Close menu on logout
    navigate("/");
  };

  const handleNavItemClick = () => {
    if (window.innerWidth < 1024) {
      setMenuOpen(false);
    }
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo onClick={() => navigate("/home")}>College Events</Logo>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </MenuIcon>
        <NavLinks menuOpen={menuOpen}>
          <NavItem to="/home" location={location} onClick={handleNavItemClick}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavItem>
          <NavItem to="/events" location={location} onClick={handleNavItemClick}>
            <FontAwesomeIcon icon={faUniversity} /> All Events
          </NavItem>
          <NavItem to="/recommend" location={location} onClick={handleNavItemClick}>
            <FontAwesomeIcon icon={faLightbulb} /> Recommendations
          </NavItem>
          <NavItem to="/favorites" location={location} onClick={handleNavItemClick}>
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </NavItem>
          <NavItem to="/registered" location={location} onClick={handleNavItemClick}>
            <FontAwesomeIcon icon={faCheckCircle} /> Registered Events
          </NavItem>
          <LogoutButton onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </LogoutButton>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  background-color: rgb(33, 33, 33);
  padding: 15px 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;

const Logo = styled.h2`
  cursor: pointer;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: none;
  margin-right: 40px;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 1024px) {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 90px;
    right: 0px;
    width: 250px;
    background: rgb(33, 33, 33);
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: #f5a623;
  }
`;

const LogoutButton = styled.button`
  background-color: rgb(231, 6, 29);
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #c82333;
  }
`;

export default Navbar;

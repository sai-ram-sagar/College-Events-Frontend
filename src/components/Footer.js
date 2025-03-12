import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FooterContainer = styled.footer`
    background-color:rgba(0, 0, 0, 0.85);
    color: white;
    padding: 20px 0;
    text-align: center;
    position: relative;
    margin-top: auto;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 10px;

    a {
        color: white;
        font-size: 1.5rem;
        transition: transform 0.2s ease-in-out;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
    }

    a:hover {
        transform: scale(1.2);
        background: rgba(255, 255, 255, 0.4);
    }
`;

const NavLinks = styled.div`
    margin-bottom: 10px;

    a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
        font-size: 1rem;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const FooterText = styled.p`
    margin-top: 10px;
    font-size: 0.9rem;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container">
                <SocialIcons>
                    <a href="https://facebook.com" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </SocialIcons>
                <NavLinks>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/contact">Contact</Link>
                </NavLinks>
                <FooterText>© 2025 College Events Recommendations | All Rights Reserved</FooterText>
            </div>
        </FooterContainer>
    );
};

export default Footer;

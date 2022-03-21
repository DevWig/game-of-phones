import React from 'react';
import styled from 'styled-components';

import { BiHome, BiChat} from 'react-icons/bi';
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdOutlineSettings, MdOutlineNotificationsNone, MdOutlineHelpOutline } from 'react-icons/md';
import Logo from '../assets/GameOfPhones_logo.png';

const NavBarContainer = styled.div`
  background: #279AF1;
  height: 100vh;
  width: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 25%;

`;

const LinkContainer = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 200px;
  align-items: center
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  width: 75px;
  font-size: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
  
`;

class LeftNavBar extends React.Component {
  render() {
    return (
      <NavBarContainer>
        <LogoContainer>
          <NavButton>
            <img src={Logo} className="nav-bar-logo" alt="Game of Phones Logo" />
          </NavButton>
        </LogoContainer>
        <LinkContainer>
          <NavButton><BiHome class="nav-bar-link-icons"/></NavButton>
          <NavButton><BiChat class="nav-bar-link-icons"/></NavButton>
          <NavButton><MdOutlineNotificationsNone class="nav-bar-link-icons"/></NavButton>
          <NavButton><RiContactsBook2Line class="nav-bar-link-icons"/></NavButton>
          <NavButton><MdOutlineSettings class="nav-bar-link-icons"/></NavButton>
          <NavButton><MdOutlineHelpOutline class="nav-bar-link-icons"/></NavButton>
        </LinkContainer>
      </NavBarContainer>
    );
  }
}

export default LeftNavBar;
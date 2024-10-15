import styled from 'styled-components';
import { bgColor, navHeight, xlPadding } from '../style';
import BurgerMenu from './navbar/BurgerMenu';
import Logo from './navbar/Logo';
import LangSwitcher from './navbar/LangSwitcher';

const Nav = styled.nav`
  width: 100%;
  height: ${navHeight}px;
  background-color: ${bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
function Navbar() {
  //write code here

  return (
    <Nav>
      <BurgerMenu />
      <Logo />
      <LangSwitcher />
    </Nav>
  );
}

export default Navbar;

import styled from 'styled-components';
import { bgColor, navHeight } from '../style';
import BurgerMenu from './navbar/BurgerMenu';

const Nav = styled.nav`
  width: 100%;
  height: ${navHeight}px;
  background-color: ${bgColor};
`;
function Navbar() {
  //write code here

  return (
    <Nav>
      <BurgerMenu />
    </Nav>
  );
}

export default Navbar;

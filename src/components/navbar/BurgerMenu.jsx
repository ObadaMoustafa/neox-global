import { useState } from 'react';
import BurgerMenuIcon from './BurgerMenuIcon';

function BurgerMenu() {
  //write code here
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BurgerMenuIcon props={{ isOpen, setIsOpen }} />
    </>
  );
}

export default BurgerMenu;

import styled from 'styled-components';
import { textColor, titleColor } from '../../../style';
import { forwardRef } from 'react';

const ImageContainer = styled.div`
  max-width: 250px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    scale: 0.9;

    h3 {
      color: ${titleColor};
    }
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: ${textColor};
    position: absolute;
    bottom: -15px;
  }
`;
const Company = forwardRef(({ image, text }, ref) => {
  //write code here

  return (
    <ImageContainer ref={ref}>
      <img src={image} alt={text} />
      <h3>{text}</h3>
    </ImageContainer>
  );
});

export default Company;

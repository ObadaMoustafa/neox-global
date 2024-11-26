import styled from 'styled-components';
import { forwardRef } from 'react';

const ImageContainer = styled.a`
  max-width: 250px;
  position: relative;
  color: white;
  cursor: pointer;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }

  h3 {
    color: inherit;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    position: absolute;
    bottom: -15px;
    text-transform: uppercase;
  }
`;
const Company = forwardRef(({ image, text, className, href }, ref) => {
  //write code here

  return (
    <ImageContainer
      ref={ref}
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={text} />
      <h3>{text}</h3>
    </ImageContainer>
  );
});

export default Company;

import styled from "styled-components";

export const BoxCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20vh;
  text-align: center;
  a {
    text-decoration: none;
    color: red;
  }
`;
export const RedPunkt = styled.span`
  color: red;
  font-size: 3rem;
`;
export const Button = styled.button`
  padding: 15px 30px;
  margin: 10px;
  background: red;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    transform: scale(1.05);
    /* transition: all 0.3s ease; */
  }
`;
export const TextWrap = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.2rem;
  width: 100%;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const SvgAbout = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -888;
  @media (max-width: 768px) {
    opacity: 0.2;
  }
`;
export const ProjectStyling = styled.div`
  width: 300px;
  height: 300px;
  padding: 30px;
  border-radius: 50%;
  margin: 50px;
  background: whitesmoke;
  box-shadow: 0 6px 4px 2px #ccc;
  position: relative;
  img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  &:hover img {
    opacity: 0.2;
  }
  &:hover > * {
    opacity: 1;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  p {
    background-color: black;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    padding: 8px 10px;
  }
`;

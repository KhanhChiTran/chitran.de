import styled from "styled-components";

export const BoxCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20vh;
  text-align: center;
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

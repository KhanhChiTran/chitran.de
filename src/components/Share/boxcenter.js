import styled from "styled-components";

export const BoxCenter = styled.div`
  position: relative;
  margin: 20vh auto;
  text-align: center;
`;
export const RedPunkt = styled.span`
  color: red;
`;
export const Button = styled.button`
  padding: 15px 30px;
  margin: 0 10px;
  background: red;
  font-size: larger;
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
  width: 60%;
  box-sizing: border-box;
  max-height: 100vh;
  margin: 0 auto;
`;

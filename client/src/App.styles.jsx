import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  padding: 20px;

  header {
    font-family: "Optima";
    font-size: 40px;
    padding: 80px 0;
  }
`;

export const Layout = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  padding: 50px;
  top: 60%;
  left: 50%;
  height: 80vw;
  width: 60vw;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  box-shadow: 5px 5px 5px purple;
`;

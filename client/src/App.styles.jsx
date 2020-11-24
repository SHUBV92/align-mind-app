import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  width: "100%";
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
  background-color: ${(props) => props.theme.background};
`;

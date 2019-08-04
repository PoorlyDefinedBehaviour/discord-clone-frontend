import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: #36393f;
  display: flex;
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 55%;
  margin: 40px;
  margin-top: 4%;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-weight: bolder;
  font-size: 11px;
  color: #696d74;
  text-transform: uppercase;
`;

export const BigTitle = styled.h1`
  font-weight: bolder;
  font-size: 15px;
  color: #fff;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const XButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #36393f;
  border: 2px solid #72767d;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:hover {
    background: #292b2f;
  }
`;

export const P = styled.p`
  color: #97999d;
  font-size: 14px;
`;

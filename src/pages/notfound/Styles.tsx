import styled from "styled-components";

import PurpleArrow from "../../assets/arrow-forward-purple.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #f6f6f7;

  display: flex;
`;

export const Headline = styled.h1`
  margin: 0;
  margin-top: 20px;

  color: #72767d;
  font-weight: bolder;
  font-size: 24px;
`;

export const Description = styled.p`
  color: #b9bbbe;
  font-weight: normal;
  line-height: 32px;
  font-size: 18px;
`;

export const Div = styled.div`
  width: 50%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  background: transparent;

  width: 450px;
  margin-top: 25%;
  margin-left: 20%;

  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  src: url(${({ src }) => src});
  align-self: flex-start;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  list-style: none;
  align-self: flex-start;

  margin: 0px;
  padding: 0px;
`;

export const LI = styled.li`
  text-transform: uppercase;

  font-weight: normal;
  font-size: 20px;
  color: #c7d0f0;

  margin-top: 10px;
  margin-bottom: 10px;

  cursor: pointer;

  position: relative;

  &:hover {
    color: #7289da;

    &::before {
      content: url(${PurpleArrow});
      margin-left: -30px;
      margin-top: -2px;
      position: absolute;
    }
  }
`;

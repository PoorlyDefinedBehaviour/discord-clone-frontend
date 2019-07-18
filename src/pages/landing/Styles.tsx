import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1100px;
  background-color: #26262b;
  font-family: "Montserrat", sans-serif;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const Image = styled.img`
  src: url(${({ src }: any): any => src});
  height: 100%;
  width: auto;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  font-size: 12px;
  font-weight: bold;
  color: #a0a6a8;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const VerticalBar = styled.span`
  width: 1px;
  height: 60%;
  background: #515155;
  margin-left: 10px;
  margin-right: 10px;
`;

export const RoundButton = styled.button`
  height: 90%;
  border: 2px solid #97979a;
  width: 70px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 15px;
  background: transparent;
  cursor: pointer;
  color: #a0a6a8;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Headline = styled.h1`
  font-size: 32px;
  color: #fff;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: #a0a6a8;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background: #7289da;
  color: #fff;
  width: 250px;
  height: 45px;
  border: none;
  border-radius: 5px;
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;

export const FloatingAnimation = keyframes`
  0% {
    transform: translate(0px, 0px);
  }

  50% {
    transform: translate(0px, 15px);
  }

  100% {
    transform: translate(0px, 0px);
  }
`;

export const AnimatedImage = styled.img`
  src: url(${({ src }: any): any => src});
  height: 70px;
  width: auto;
  cursor: pointer;
  animation: ${FloatingAnimation} 5s linear infinite;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const FadedImage = styled.img`
  src: url(${({ src }: any): any => src});

  filter: invert(46%) sepia(14%) saturate(182%) hue-rotate(180deg)
    brightness(97%) contrast(90%);
`;

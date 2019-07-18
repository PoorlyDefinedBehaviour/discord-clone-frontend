import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: #36393f;
  display: flex;
`;

export const Leftcontainer = styled.div`
  width: 18%;
  height: 100%;
  background: #2f3136;
  display: flex;
  justify-content: flex-end;
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

export const InnerContainer = styled.div`
  height: 100%;
  width: 200px;
`;

export const Button = styled.button`
  text-align: left;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #999a9e;
  font-size: 14px;
  font-weight: bolder;
  padding: 10px;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #292b2f;
  }
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background: #40444b;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-start;
`;

export const Icon = styled.img`
  src: url(${({ src }: any): any => src});
  margin-right: 15px;
  cursor: pointer;
  transform: scale(0.8);

  filter: invert(46%) sepia(14%) saturate(182%) hue-rotate(180deg)
    brightness(97%) contrast(90%);

  &:hover {
    filter: brightness(0.8);
  }
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

export const Avatar = styled.img`
  src: url(${(props: any): any => props.src});
  width: 100px;
  height: 80px;
  border-radius: 50%;
`;

export const P = styled.p`
  color: #97999d;
  font-size: 14px;
`;

export const DefaultButton = styled.button`
  width: 90px;
  height: 35px;
  background: #7289da;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

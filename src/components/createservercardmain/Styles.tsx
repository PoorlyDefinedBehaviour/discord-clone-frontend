import styled from "styled-components";

export const PopUpContainer = styled.div`
  width: 540px;
  height: 420px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 100;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const Background = styled.img`
  height: 200px;
  width: auto;
  margin-top: 40%;
`;

export const Action = styled.div`
  width: 210px;
  height: 285px;
  border: 2px solid #e5e5e5;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 15%;
  top: 70%;
  transform: translate(-15%, -70%);
  text-align: center;
  line-height: 20px;
`;

export const Name = styled.p`
  color: ${(props: any): any => props.color};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px auto;
  text-align: justify;
`;

export const Image = styled.img`
  src: url(${(props: any): any => props.src});
  width: 50%;
  height: auto;
  margin: 0 auto;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #9bacb6;
  width: 80%;
  margin: 0 auto;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: ${(props: any): any => props.color};
  color: #fff;
  margin: 0 auto;
  width: 80%;
  height: 50px;
  cursor: pointer;
  outline: none;

  &:hover {
    filter: brightness(0.95);
  }
`;

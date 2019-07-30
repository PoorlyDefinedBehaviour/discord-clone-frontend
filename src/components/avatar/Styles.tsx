import styled from "styled-components";

export const Avatar = styled.img`
  src: url(${(props: any): any => props.src});
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
  width: 40px;
  height: 40px;
`;

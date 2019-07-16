import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

export const MessageContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #42454a;
`;

export const Message = styled.p`
  color: #a8aaad;
  font-size: 12px;
  width: 100%;
  max-width: inherit;
  min-height: 35px;
  overflow: hidden;
`;

export const AvatarContainer = styled.div`
  width: 100px;
`;

export const Avatar = styled.img`
  src: url(${(props: any): any => props.src});
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
  width: 40px;
  height: 40px;
`;

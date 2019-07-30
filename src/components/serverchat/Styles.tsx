import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  position: fixed;
  bottom: 80px;
`;

export const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  background: #36393f;
`;

export const MessageContainer = styled.div`
  margin-top: 5px;
  margin-left: 30px;
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

export const Input = styled.input`
  position: fixed;
  bottom: 0;
  width: 60%;
  height: 40px;
  background: #484b52;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 2%;
  text-indent: 10px;
  color: #fff;
`;

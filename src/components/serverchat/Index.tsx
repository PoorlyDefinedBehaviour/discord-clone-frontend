import React from "react";
import {
  Container,
  MessageContainer,
  Message,
  AvatarContainer,
  Avatar
} from "./Styles";

import { ContentSection } from "../../pages/lobby/Styles";

import TPHIcon from "../../assets/server-icon.png";

export default function ServerChat(): any {
  return (
    <ContentSection>
      <Container>
        <MessageContainer>
          <AvatarContainer>
            <Avatar src={TPHIcon} />
          </AvatarContainer>
          <Message>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nam,
            quaerat distinctio libero porro quae animi voluptatem deleniti
            repellat nemo.
          </Message>
        </MessageContainer>
        <MessageContainer>
          <AvatarContainer>
            <Avatar src={TPHIcon} />
          </AvatarContainer>
          <Message>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nam,
            quaerat distinctio libero porro quae animi voluptatem deleniti
            repellat nemo.
          </Message>
        </MessageContainer>
        <MessageContainer>
          <AvatarContainer>
            <Avatar src={TPHIcon} />
          </AvatarContainer>
          <Message>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nam,
            quaerat distinctio libero porro quae animi voluptatem deleniti
            repellat nemo.
          </Message>
        </MessageContainer>
        <MessageContainer>
          <AvatarContainer>
            <Avatar src={TPHIcon} />
          </AvatarContainer>
          <Message>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nam,
            quaerat distinctio libero porro quae animi voluptatem deleniti
            repellat nemo.
          </Message>
        </MessageContainer>
      </Container>
    </ContentSection>
  );
}

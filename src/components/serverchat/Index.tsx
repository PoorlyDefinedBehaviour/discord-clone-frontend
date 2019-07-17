import React from "react";
import {
  Container,
  MessageContainer,
  Message,
  AvatarContainer,
  Avatar,
  Input,
  ContentSection
} from "./Styles";

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
      <Input placeholder="Message" />
    </ContentSection>
  );
}

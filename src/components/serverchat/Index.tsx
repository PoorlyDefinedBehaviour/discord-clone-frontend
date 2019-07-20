import React, { useState } from "react";

import io from "socket.io-client";

import {
  Container,
  MessageContainer,
  Message,
  AvatarContainer,
  Avatar,
  Input,
  ContentSection
} from "./Styles";

import { ApiUrl } from "../../services/Api";
import { store } from "../../store/Index";

const socket: any = io(ApiUrl);

let lastMesssageSentAt: number = 0;

export default function ServerChat(server): any {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([] as any);

  const {
    server: { _id }
  }: any = store.getState();

  socket.emit("join", _id);

  socket.on(
    "message",
    (message: any): void => {
      console.log("received", message.message);
      setMessages([...messages, message.message]);
    }
  );

  const sendMessage = (event: any): void => {
    event.preventDefault();

    if (!currentMessage) {
      return;
    }

    const timePassed: number = Date.now() - lastMesssageSentAt;

    if (timePassed < 1000) {
      console.log("too fast");
      return;
    }

    const { user }: any = store.getState();

    setMessages([
      ...messages,
      { content: currentMessage, author: { ...user, token: null } }
    ]);

    socket.emit("message", {
      message: {
        room: _id,
        content: currentMessage,
        author: { ...user, token: null }
      }
    });

    setCurrentMessage("");

    lastMesssageSentAt = Date.now();
  };

  return (
    <ContentSection>
      <Container>
        {messages.length > 0 &&
          messages.map(
            (message: any): any => (
              <MessageContainer key={Math.random()}>
                <AvatarContainer>
                  <Avatar src={message.author.avatar} />
                </AvatarContainer>
                <Message>{message.content}</Message>
              </MessageContainer>
            )
          )}
        <form onSubmit={(e: any): void => sendMessage(e)}>
          <Input
            placeholder="Message"
            onChange={(e: any): void => setCurrentMessage(e.target.value)}
            value={currentMessage}
          />
        </form>
      </Container>
    </ContentSection>
  );
}

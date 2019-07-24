import React, { useState } from "react";

import { ReactMic } from "react-mic";

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

import { ErrorMessage } from "../errormessage/Index";
import { useKeyPress } from "../../hooks/useKeyPress";

export const socket: any = io(ApiUrl);

let lastMessageTimestamp = 0;
let audioChunks: Array<any> = [];

//@ts-ignore
const playAudio = (chunks: Array<any>): void => {
  const audioUrl: string = URL.createObjectURL(new Blob(chunks));
  new Audio(audioUrl).play();
};

export function ServerChat(server): any {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([] as any);

  const [tooManyMessages, setTooManyMessages] = useState(false);

  const {
    user,
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

  socket.on("voice", (data: any): void => playAudio(data.data.content));

  const onData = (chunk: any): any => audioChunks.push(chunk);

  const onStop = (_: any): void => {
    socket.emit("voice", {
      data: {
        room: _id,
        content: audioChunks,
        author: { ...user, token: null }
      }
    });
    audioChunks = [];
  };

  const sendMessage = (e: any): void => {
    e.preventDefault();

    if (!currentMessage) {
      return;
    }

    const timePassed = Date.now() - lastMessageTimestamp;

    timePassed > 1000 ? setTooManyMessages(false) : setTooManyMessages(true);

    if (tooManyMessages) {
      return;
    }

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
    lastMessageTimestamp = Date.now();
  };

  return (
    <ContentSection>
      <div style={{ width: "0px", height: "0px", marginTop: "-2000px" }}>
        <ReactMic
          record={useKeyPress("t")}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
      </div>
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

        {tooManyMessages && (
          <ErrorMessage message="You're sending too many messages" />
        )}
        <form onSubmit={(e: any): void => sendMessage(e)}>
          <Input
            placeholder="type here"
            onChange={(e: any): void => setCurrentMessage(e.target.value)}
            value={currentMessage}
          />
        </form>
      </Container>
    </ContentSection>
  );
}

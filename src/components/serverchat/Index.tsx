import React, { useState } from "react";

import { ReactMic } from "react-mic";

import io from "socket.io-client";

import * as S from "./Styles";

import { ApiUrl } from "../../services/Api";
import { store } from "../../store/Index";

import { ErrorMessage } from "../errormessage/Index";
import { useKeyPress } from "../../hooks/useKeyPress";
import { Avatar } from "../avatar/Index";

export const socket: any = io(ApiUrl);

let lastMessageTimestamp: number = 0;
let audioChunks: Array<any> = [];

const playAudio = (chunks: Array<any>): void => {
  const audioUrl: string = URL.createObjectURL(new Blob(chunks));
  new Audio(audioUrl).play();
};

export const ServerChat = (): JSX.Element => {
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

  const onData = audioChunks.push;

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

    if (!currentMessage) return;

    const timePassed: number = Date.now() - lastMessageTimestamp;

    timePassed > 1000 ? setTooManyMessages(false) : setTooManyMessages(true);

    if (tooManyMessages) return;

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
    <S.ContentSection>
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
      <S.Container>
        {messages.length > 0 &&
          messages.map(
            (message: any): any => (
              <S.MessageContainer key={Math.random()}>
                <S.AvatarContainer>
                  <Avatar src={message.author.avatar} />
                </S.AvatarContainer>
                <S.Message>{message.content}</S.Message>
              </S.MessageContainer>
            )
          )}

        {tooManyMessages && (
          <ErrorMessage message="You're sending too many messages" />
        )}
        <form onSubmit={(e: any): void => sendMessage(e)}>
          <S.Input
            placeholder="type here"
            onChange={(e: any): void => setCurrentMessage(e.target.value)}
            value={currentMessage}
          />
        </form>
      </S.Container>
    </S.ContentSection>
  );
};

import React from "react";
import { useMoralis } from "react-moralis";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div>
      <div>
        <p>{message.get("message")}</p>
      </div>
    </div>
  );
};

export default Message;

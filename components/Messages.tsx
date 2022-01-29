import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  return (
    <div className="pb-56">
      <div>
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div>{/* Each Message */}</div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessageRef} />
      </div>

      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user?.getUsername()}! 🎉</p>
      </div>
    </div>
  );
};

export default Messages;

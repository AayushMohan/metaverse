import React from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";

const Messages = () => {
  return (
    <div className="pb-56">
      <div>
        <ByMoralis style={{ marginLeft: "auto", marginRight: "auto" }} />
      </div>

      <h1>I'm the messages</h1>
    </div>
  );
};

export default Messages;

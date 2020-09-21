import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Harshit</h2>
        <p>Hie there I am using whatsapp!</p>
      </div>
    </div>
  );
}
function SidebarChat2() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>AAyush</h2>
        <p>Hie there I am using whatsapp!</p>
      </div>
    </div>
  );
}

export default SidebarChat;

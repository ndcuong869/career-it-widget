import Widget from "rasa-webchat";
import { useRef } from "react";
import { useCookies } from "react-cookie";

export default function CustomWidget() {
  const webchatRef = useRef(null);
  const [cookies, setCookie] = useCookies(["user"]);
  const payload = "/greet"

  if (cookies.user !== undefined) {
    payload = "/greatWithName"
  }


  return (
    <Widget
      ref={webchatRef}
      initPayload={payload}
      socketUrl={"http://localhost:5005"}
      customData={{ language: "en" }}
      title="Career Chatbot"
      subtitle="Powered by FIT-HCMUS"
      showFullScreenButton={true}
      showMessageDate={false}
      profileAvatar="https://i.ibb.co/wQqdKPf/chatbot-icon.png"
    />
  );
}

import { config } from "./routeConfig";

export const ChatRoom = () => {
  const userId = "";
  return (
    <>
      <form hx-post={`${config.routePrefix}/send/${userId}`}>
        <input type="textarea" name="message-body" value="" />
        <button>send</button>
      </form>
      <ChatHistory />
    </>
  );
};

export const ChatHistory = (props) => {
  return props.chatHistoryData ? (
    <div hx-get={`${config.routePrefix}/history/${props.chatRoomId}`}>
      {props.chatHistoryData.map((chat) => {
        <span key={chat.messageId}>{chat.message}</span>;
      })}
    </div>
  ) : (
    <div>
      Loading...
      {console.log("props.chatHistoryData may be undefined")}
    </div>
  );
};

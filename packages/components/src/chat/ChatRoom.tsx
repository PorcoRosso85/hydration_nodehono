import { config } from "../../../routes/src/chat/config";

export const ChatFeature = (props) => {
  const style = `
  .flex-container {
    display: flex;
    flex-direction: row; /* 水平方向に配置 */
  }
  
  .left-side {
    flex: 3; /* 左側は3つ分の幅 */
    background-color: gray; /* 背景色は青 */
  }
  
  .right-side {
    flex: 7; /* 右側は7つ分の幅 */
    background-color: lightgray; /* 背景色は緑 */
  }
  `;
  return (
    <>
      <style>{style}</style>
      <div class="flex-container">
        <div class="left-side">
          {props.roomList.map((room) => {
            return (
              <>
                <button
                  hx-get={`${config.routePrefix}/room/${room.roomId}`}
                  hx-target=".chat-room"
                >
                  {room.name}
                </button>
                <br />
              </>
            );
          })}
        </div>
        <div class="right-side">
          <div class="chat-room"></div>
        </div>
      </div>
    </>
  );
};

export const ChatInput = (props) => {
  return (
    <>
      {/* TODO: includeで書き換え */}
      <input type="textarea" name="message-body" value="" />
      <button
        hx-post={`${config.routePrefix}/send/${props.userId}`}
        hx-include='[name="message-body"]'
        hx-swap="none"
      >
        send
      </button>
    </>
  );
};

export const ChatHistory = (props) => {
  console.log("chatHistoryData: ", props.chatHistoryData);
  return props.chatHistoryData ? (
    <div hx-get={`${config.routePrefix}/history/${props.roomId}`}>
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

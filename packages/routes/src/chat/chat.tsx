import { Hono } from "hono";
import {
  ChatFeature,
  ChatHistory,
  ChatInput,
} from "../../../components/src/chat/ChatRoom";
import {
  chatHistoryData,
  roomList,
} from "../../../components/src/chat/data/chatHistoryData";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(
      <>
        <ChatFeature roomList={roomList} />
      </>
    );
  })
  .get("/room/:roomId", async (c) => {
    const roomId = await c.req.param("roomId");
    const userId = "001"; // TODO
    return c.html(
      <div class="chat-room">
        <ChatHistory roomId={roomId} />
        <ChatInput userId={userId} />
      </div>
    );
  })
  .get("/history/:roomId", (c) => {
    const roomId = c.req.param("roomId");
    return c.render(
      <ChatHistory
        // TODO: roomIdとroomListが一致するルーム
        chatRoomId={roomList[0].roomId}
        chatHistoryData={chatHistoryData}
      />
    );
  });

export { app as chatHonoApp };

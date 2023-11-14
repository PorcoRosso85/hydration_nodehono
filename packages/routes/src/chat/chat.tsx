import { Hono } from "hono";
import { ChatHistory, ChatRoom } from "../../../components/src/chat/ChatRoom";
import { chatHistoryData } from "../../../components/src/chat/data/chatHistoryData";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(
      <>
        <ChatRoom />
      </>
    );
  })
  .get("/history/:chatRoomId", (c) => {
    const chatRoomId = c.req.param("chatRoomId");
    return c.render(
      <ChatHistory chatRoomId="1" chatHistoryData={chatHistoryData} />
    );
  });

export { app as chatHonoApp };

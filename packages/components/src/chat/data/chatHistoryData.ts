export type chatHistoryDataType = {
  userId: string;
  chatRoomId: string;
  messageId: string;
  message: string;
};

export const chatHistoryData: chatHistoryDataType[] = [
  {
    userId: "001",
    chatRoomId: "1",
    messageId: "0001",
    message: "hi, 002",
  },
  {
    userId: "002",
    chatRoomId: "1",
    messageId: "0002",
    message: "hi, 001",
  },
];

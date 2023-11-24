export type chatHistoryDataType = {
  userId: string;
  roomId: string;
  messageId: string;
  message: string;
};

export const chatHistoryData: chatHistoryDataType[] = [
  {
    userId: "001",
    roomId: "01",
    messageId: "0001",
    message: "hi, 002",
  },
  {
    userId: "002",
    roomId: "02",
    messageId: "0002",
    message: "hi, 001",
  },
];

export const roomList = [
  {
    roomId: "01",
    name: "01",
  },
  {
    roomId: "02",
    name: "02",
  },
  {
    roomId: "03",
    name: "03",
  },
];

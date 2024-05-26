import { create } from "zustand";
import { Chat } from "../type/chatType";

type ChatStore = {
  chatHistory: Chat[];
  setChatHistory: (updateChatHistory: Chat) => void;
};

const initialChatHistory: Chat[] = [
  {
    id: 1,
    type: "questionComment",
    phrase: "방문해주셔서 감사합니다.",
    createdAt: new Date(),
  },
  {
    id: 2,
    type: "questionComment",
    phrase: "프론트엔드 개발자 엄성준 입니다.",
    createdAt: new Date(),
  },
  {
    id: 3,
    type: "selectQuestion",
    phrase: "저에게 궁금한 점에 대해서 선택해주세요!",
    options: [
      { id: 4, text: "궁금한점1" },
      { id: 5, text: "궁금한점1" },
      { id: 6, text: "궁금한점1" },
      { id: 7, text: "궁금한점1" },
      { id: 8, text: "궁금한점1" },
    ],
    createdAt: new Date(),
  },
];

export const chatStore = create<ChatStore>()((set) => ({
  chatHistory: initialChatHistory,
  setChatHistory: (updateChatHistory) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, updateChatHistory],
    })),
}));

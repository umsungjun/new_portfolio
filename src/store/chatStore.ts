import { create } from "zustand";
import { Chat } from "../type/chatType";
import { initialChatHistory } from "../data/initialChatHistory";

type ChatStore = {
  chatHistory: Chat[];
  setChatHistory: (updateChatHistory: Chat) => void;
  popChatHistory: () => void;
};

export const chatStore = create<ChatStore>()((set) => ({
  chatHistory: initialChatHistory,
  setChatHistory: (updateChatHistory) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, updateChatHistory],
    })),
  popChatHistory: () =>
    set((state) => ({ chatHistory: state.chatHistory.slice(0, -1) })),
}));

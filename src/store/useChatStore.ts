import { create } from "zustand";
import { Chat } from "../type/chatType";
import { initialChatHistory } from "../data/initialChatHistory";

type UseChatStore = {
  chatHistory: Chat[];
  setChatHistory: (updateChatHistory: Chat) => void;
  popChatHistory: () => void;
};

const savedChatHistory = sessionStorage.getItem("chatHistory");

export const useChatStore = create<UseChatStore>()((set) => ({
  chatHistory: savedChatHistory
    ? JSON.parse(savedChatHistory)
    : initialChatHistory,
  setChatHistory: (updateChatHistory) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, updateChatHistory],
    })),
  popChatHistory: () =>
    set((state) => ({ chatHistory: state.chatHistory.slice(0, -1) })),
}));

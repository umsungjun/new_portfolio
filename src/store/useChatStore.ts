import { create } from "zustand";
import { Chat } from "../type/chatType";
import { initialChatHistory } from "../data/initialChatHistory";

type UseChatStore = {
  chatHistory: Chat[];
  setChatHistory: (updateChatHistory: Chat) => void;
  popChatHistory: () => void;
};

export const useChatStore = create<UseChatStore>()((set) => ({
  chatHistory: initialChatHistory,
  setChatHistory: (updateChatHistory) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, updateChatHistory],
    })),
  popChatHistory: () =>
    set((state) => ({ chatHistory: state.chatHistory.slice(0, -1) })),
}));

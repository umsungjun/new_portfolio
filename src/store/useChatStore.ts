import { create } from "zustand";
import { Chat } from "../type/chatType";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import { initialChatHistory } from "../data/initialChatHistory";

type UseChatStore = {
  chatHistory: Chat[];
  setChatHistory: (updateChatHistory: Chat) => void;
  popChatHistory: () => void;
};

/* 채팅 기록은 브라우저 새로고침 시 초기화되도록 sessionStorage로 관리 */
export const useChatStore = create<UseChatStore>()(
  persist(
    (set, get) => ({
      chatHistory: initialChatHistory,
      setChatHistory: (updateChatHistory) =>
        set(() => ({
          chatHistory: [...get().chatHistory, updateChatHistory],
        })),
      popChatHistory: () =>
        set(() => ({ chatHistory: get().chatHistory.slice(0, -1) })),
    }),
    {
      name: "useChatStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

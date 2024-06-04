import { Chat } from "../type/chatType";

export const initialChatHistory: Chat[] = [
  {
    id: 1,
    type: "questionComment",
    text: "chat.hello" /* 인사 문구 */,
    createdAt: new Date(),
  },
  {
    id: 2,
    type: "questionComment",
    text: "common.introduce2" /* 자기소개 문구 */,
    createdAt: new Date(),
  },
  {
    id: 3,
    type: "selectQuestion",
    text: "저에게 궁금한 점에 대해서 선택해주세요!",
    options: [
      {
        id: 4,
        type: "answer",
        text: "chat.question1",
        answerKey: "test",
      },
      { id: 5, type: "answer", text: "궁금한점2", answerKey: "답변2" },
      { id: 6, type: "answer", text: "궁금한점3", answerKey: "답변3" },
      { id: 7, type: "answer", text: "궁금한점4", answerKey: "답변4" },
      { id: 8, type: "answer", text: "궁금한점5", answerKey: "답변5" },
    ],
    createdAt: new Date(),
  },
];

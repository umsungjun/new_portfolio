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
    text: "chat.selectQuestion",
    options: [
      {
        id: 4,
        type: "answer",
        text: "chat.question1",
        answerKey: "answer1",
      },
      { id: 5, type: "answer", text: "chat.question2", answerKey: "answer2" },
      { id: 6, type: "answer", text: "chat.question3", answerKey: "answer3" },
      { id: 7, type: "answer", text: "chat.question4", answerKey: "answer4" },
      { id: 8, type: "answer", text: "궁금한점5", answerKey: "answer5" },
    ],
    createdAt: new Date(),
  },
];

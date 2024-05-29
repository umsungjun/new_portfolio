import { Chat } from "../type/chatType";

export const initialChatHistory: Chat[] = [
  {
    id: 1,
    type: "questionComment",
    text: "방문해주셔서 감사합니다.",
    createdAt: new Date(),
  },
  {
    id: 2,
    type: "questionComment",
    text: "프론트엔드 개발자 엄성준 입니다.",
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
        text: "궁금한점1",
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

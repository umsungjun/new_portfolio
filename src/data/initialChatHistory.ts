import { Chat } from "../type/chatType";

export const initialChatHistory: Chat[] = [
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
      { id: 4, type: "answer1", text: "궁금한점1", phrase: "" },
      { id: 5, type: "answer2", text: "궁금한점1", phrase: "" },
      { id: 6, type: "answer3", text: "궁금한점1", phrase: "" },
      { id: 7, type: "answer4", text: "궁금한점1", phrase: "" },
      { id: 8, type: "answer5", text: "궁금한점1", phrase: "" },
    ],
    createdAt: new Date(),
  },
];

export type Chat = {
  id: number;
  type:
    | "questionComment"
    | "userComment"
    | "selectQuestion"
    | "answer" /* 채팅 타입 */;
  text?: string /* 내용 */;
  options?: ChatOption[] /* 버튼 선택지 */;
  answerKey?: string;
  createdAt: Date /* 생성일 */;
};

export type ChatOption = {
  id: number;
  text: string /* 버튼 텍스트 */;
  type: "answer" /* 채팅 타입 */;
  answerKey: string /* key에 따른 답변 랜더링 */;
};

export type Chat = {
  id: number;
  type: "questionComment" | "userComment" | "selectQuestion" /* 채팅 타입 */;
  phrase: string /* 문구 */;
  options?: string[] /* 버튼 선택지 */;
  photos?: string[] /* 이미지 */;
  videos?: string[] /* 동영상 */;
  createdAt: Date /* 생성일 */;
};

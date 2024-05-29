import { chatStore } from "../../../store/chatStore";
import { Chat, ChatOption } from "../../../type/chatType";

type SelectQuestion = {
  text: string;
  options: ChatOption[] | undefined;
};

export default function SelectQuestion({ text, options }: SelectQuestion) {
  const { setChatHistory, popChatHistory } = chatStore();

  /* 질문 석택 */
  const handleSelectQuestion = ({
    id,
    type,
    text,
    answerKey,
    createdAt,
  }: Chat) => {
    /* 질문 선택지 제거 */
    popChatHistory();
    /* 선택 된 질문 출력 */
    setChatHistory({
      id,
      type: "questionComment",
      text,
      createdAt: new Date(),
    });
    /* 답변 출력 */
    setChatHistory({
      id,
      type,
      answerKey,
      createdAt,
    });
  };

  return (
    <div className="questionWrapper">
      <div className="questionButtonBox">
        <span>{text}</span>
        {options?.map((option) => {
          return (
            <button
              key={option.id}
              onClick={() =>
                handleSelectQuestion({
                  id: option.id,
                  type: option.type,
                  answerKey: option.answerKey,
                  createdAt: new Date(),
                  text: option.text,
                })
              }
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

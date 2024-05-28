import { chatStore } from "../../../store/chatStore";
import { Chat, ChatOption } from "../../../type/chatType";

type SelectQuestion = {
  phrase: string;
  options: ChatOption[] | undefined;
};

type HandleSelectQuestion = Chat & {
  text: string;
};

export default function SelectQuestion({ phrase, options }: SelectQuestion) {
  const { setChatHistory, popChatHistory } = chatStore();

  /* 질문 석택 */
  const handleSelectQuestion = ({
    id,
    type,
    phrase,
    createdAt,
    text,
  }: HandleSelectQuestion) => {
    /* 질문 선택지 제거 */
    popChatHistory();
    /* 선택 된 질문 출력 */
    setChatHistory({
      id,
      type: "questionComment",
      phrase: text,
      createdAt: new Date(),
    });
    /* 답변 출력 */
    setChatHistory({
      id,
      type,
      phrase,
      createdAt,
    });
  };

  return (
    <div className="questionWrapper">
      <div className="questionButtonBox">
        <span>{phrase}</span>
        {options?.map((option) => {
          return (
            <button
              key={option.id}
              onClick={() =>
                handleSelectQuestion({
                  id: option.id,
                  type: option.type,
                  phrase: option.phrase,
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

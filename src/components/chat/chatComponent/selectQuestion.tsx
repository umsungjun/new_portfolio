import { useTranslation } from "react-i18next";
import { useChatStore } from "../../../store/useChatStore";
import { Chat, ChatOption } from "../../../type/chatType";

type SelectQuestion = {
  text: string;
  options: ChatOption[] | undefined;
};

const selectQuestion: Chat = {
  id: 3,
  type: "selectQuestion",
  text: "chat.selectQuestion",
  createdAt: new Date(),
};

export default function SelectQuestion({ text, options }: SelectQuestion) {
  const { t } = useTranslation();
  const { setChatHistory, popChatHistory } = useChatStore();

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
    /* 질문 선택지 추가 */
    if (options && 1 < options.length) {
      const noSelectedOptions = options.filter((option) => option.id !== id);
      setTimeout(() => {
        setChatHistory({ ...selectQuestion, options: noSelectedOptions });
      }, 1000);
    }
  };

  return (
    <div className="questionWrapper">
      <div className="questionButtonBox">
        <span>{t(text)}</span>
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
              {t(option.text)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

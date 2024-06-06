import { useEffect, useState } from "react";
import { useChatStore } from "../../store/useChatStore";
import Answer from "./chatComponent/answer/answer";
import ChatStart from "./chatComponent/chatStart";
import QuestionComment from "./chatComponent/questionComment";
import SelectQuestion from "./chatComponent/selectQuestion";

export default function ChatBody() {
  /* 새로 고침 여부 */
  const [isRefresh, setIsRefresh] = useState<boolean>(true);
  const { chatHistory } = useChatStore();
  useEffect(() => {
    setTimeout(() => {
      setIsRefresh(false);
    }, 1000);
  }, []);

  /* chatHistory 변경 될 때 마다 sessionStorage 저장 */
  useEffect(() => {
    sessionStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  return (
    <div className="relative h-full px-5 pt-6 pb-20 max-h-dvh overflow-y-scroll flex flex-col gap-4">
      <ChatStart createdAt={chatHistory[0].createdAt} />
      {chatHistory.map((chatData) => {
        if (chatData.type === "questionComment") {
          return (
            <QuestionComment
              key={`questionComment+${chatData.id}`}
              id={chatData.id}
              text={chatData.text!}
            />
          );
        }
        if (chatData.type === "selectQuestion") {
          return (
            <SelectQuestion
              key={chatData.id}
              text={chatData.text!}
              options={chatData.options}
            />
          );
        }
        if (chatData.type === "answer") {
          return (
            <Answer
              key={`answer+${chatData.id}`}
              answerKey={chatData.answerKey}
              isRefresh={isRefresh}
            />
          );
        }
      })}
    </div>
  );
}

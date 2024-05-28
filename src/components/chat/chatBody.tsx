import { chatStore } from "../../store/chatStore";
import Answer from "./chatComponent/answer";
import QuestionComment from "./chatComponent/questionComment";
import SelectQuestion from "./chatComponent/selectQuestion";

export default function ChatBody() {
  const { chatHistory } = chatStore();
  console.log(chatHistory);
  return (
    <div className="relative h-full px-5 pt-6 pb-20 max-h-dvh overflow-y-scroll flex flex-col gap-4">
      {chatHistory.map((chatData) => {
        if (chatData.type === "questionComment") {
          return (
            <QuestionComment
              key={`questionComment+${chatData.id}`}
              id={chatData.id}
              phrase={chatData.phrase}
            />
          );
        }
        if (chatData.type === "selectQuestion") {
          return (
            <SelectQuestion
              key={chatData.id}
              phrase={chatData.phrase}
              options={chatData.options}
            />
          );
        }
        if (chatData.type === "answer") {
          return (
            <Answer key={`answer+${chatData.id}`} phrase={chatData.phrase} />
          );
        }
      })}
    </div>
  );
}

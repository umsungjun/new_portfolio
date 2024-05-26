import { ChatOption } from "../../../type/chatType";

type SelectQuestion = {
  phrase: string;
  options: ChatOption[] | undefined;
};

export default function SelectQuestion({ phrase, options }: SelectQuestion) {
  return (
    <div className="questionWrapper">
      <div className="questionButtonBox">
        <span>{phrase}</span>
        {options?.map((option) => {
          return <button key={option.id}>{option.text}</button>;
        })}
      </div>
    </div>
  );
}

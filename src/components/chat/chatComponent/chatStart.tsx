import { format } from "date-fns";
import { ko } from "date-fns/locale";

type ChatStart = {
  createdAt: Date;
};

export default function ChatStart({ createdAt }: ChatStart) {
  return (
    <span className="mx-auto -mb-4 rounded-2xl text-gray-500 text-sm">
      {format(createdAt, "yyyy년 MM월 dd일 (EEEE)", { locale: ko })}
    </span>
  );
}

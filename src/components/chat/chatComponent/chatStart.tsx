import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useLanguageStore } from "../../../store/useLanguageStore";

type ChatStart = {
  createdAt: Date;
};

export default function ChatStart({ createdAt }: ChatStart) {
  const { language } = useLanguageStore();
  return (
    <span className="mx-auto -mb-4 rounded-2xl text-gray-500 text-sm">
      {language === "ko"
        ? format(createdAt, "yyyy년 MM월 dd일 (EEEE)", { locale: ko })
        : format(createdAt, "do MMM yyyy (EEEE)")}
    </span>
  );
}

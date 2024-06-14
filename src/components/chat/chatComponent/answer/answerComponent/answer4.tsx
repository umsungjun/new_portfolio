import { useTranslation } from "react-i18next";
import AnswerMark from "./utilComponent/answerMark";
import QuestionMark from "./utilComponent/questionMark";

export default function Answer4() {
  const { t } = useTranslation();
  return (
    <div className="answer">
      <p className="font-black">
        <QuestionMark />
        {t("chat.answer4-1")}
      </p>
      <p>
        <AnswerMark />
        {t("chat.answer4-2")}
      </p>
      <p className="font-black mt-3 flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="inline-block text-red-500"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
        {t("chat.answer4-3")}
      </p>
      <p className="font-black">{t("chat.answer4-4")}</p>
      <p>{t("chat.answer4-5")}</p>
      <p className="font-black">{t("chat.answer4-6")}</p>
      <p>{t("chat.answer4-7")}</p>
      <p className="font-black">{t("chat.answer4-8")}</p>
      <p>{t("chat.answer4-9")}</p>
      <p className="font-black">{t("chat.answer4-10")}</p>
      <p>{t("chat.answer4-11")}</p>
    </div>
  );
}

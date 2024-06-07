import { useTranslation } from "react-i18next";
import AnswerMark from "./utilComponent/answerMark";
import QuestionMark from "./utilComponent/questionMark";

export default function Answer2() {
  const { t } = useTranslation();
  return (
    <div className="answer">
      <p className="question">
        <QuestionMark />
        {t("chat.answer2-1")}
      </p>
      <p>
        <span className="font-black">{t("chat.answer2-2")}</span>
        <br />
        <span className="frontStackBox">- JavaScript, TypeScript</span>
      </p>
      <p>
        <span className="font-black">{t("chat.answer2-3")}</span>
        <br /> <span className="frontStackBox">- ReactJs, NextJs</span>
      </p>
      <p>
        <span className="font-black">{t("chat.answer2-4")}</span>
        <br />
        <span className="frontStackBox">
          - CSS3, styled-Component, Tailwind CSS
        </span>
      </p>
      <p>
        <span className="font-black">{t("chat.answer2-5")}</span>
        <br />
        <span className="frontStackBox">
          - TanStack-Query (React-Query), useSWR
        </span>
      </p>
      <p>
        <span className="font-black">{t("chat.answer2-6")}</span>
        <br />
        <span className="frontStackBox">- Zustand, Redux Toolkit</span>
      </p>
      <p className="question mt-3">
        <QuestionMark />
        {t("chat.answer2-7")}
      </p>
      <p>
        <AnswerMark />
        {t("chat.answer2-8")}
      </p>
    </div>
  );
}

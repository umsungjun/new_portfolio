import { useTranslation } from "react-i18next";
import AnswerMark from "./utilComponent/answerMark";
import QuestionMark from "./utilComponent/questionMark";
import VideoPlayer from "./utilComponent/videoPlayer";

export default function Answer1() {
  const { t } = useTranslation();
  return (
    <div className="answer">
      <p className="question">
        <QuestionMark />
        {t("chat.answer1-1")}
      </p>
      <p>
        <AnswerMark />
        {t("chat.answer1-2")}
      </p>
      <p className="question mt-3">
        <QuestionMark />
        {t("chat.answer1-3")}
      </p>
      <p>
        <AnswerMark />
        {t("chat.answer1-4")}
      </p>
      <p className="font-black mt-3">
        <QuestionMark />
        {t("chat.answer1-5")}
      </p>
      <p>
        <AnswerMark />
        {t("chat.answer1-6")}
      </p>
      <p>{t("chat.answer1-7")}</p>
      <p>{t("chat.answer1-8")}</p>
      <p className="font-black mt-2">{t("chat.answer1-9")}</p>
      <p className="font-black mt-2 flex items-center gap-1.5">
        <span className="bg-red-500 rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
          </svg>
        </span>
        {t("chat.answer1-10")}
      </p>
      <VideoPlayer videoId={"7USF9jFaC54"} />
    </div>
  );
}

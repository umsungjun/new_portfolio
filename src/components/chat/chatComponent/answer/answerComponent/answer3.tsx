import { useTranslation } from "react-i18next";
import AnswerMark from "./utilComponent/answerMark";
import QuestionMark from "./utilComponent/questionMark";
import { useImagePreviewStore } from "../../../../../store/useImagePreviewStore";

export default function Answer3() {
  const { setImageUrl, setOpenImagePreview } = useImagePreviewStore();
  const { t } = useTranslation();

  return (
    <div className="answer">
      <p className="question">
        <QuestionMark />
        {t("chat.answer3-1")}
      </p>
      <p className="font-black">
        <AnswerMark />
        {t("chat.answer3-2")}
      </p>
      <p>- {t("chat.answer3-3")}</p>
      <p>- {t("chat.answer3-4")}</p>
      <p className="font-black">{t("chat.answer3-5")}</p>
      <p>- {t("chat.answer3-6")}</p>
      <p>- {t("chat.answer3-7")}</p>
      <p className="font-black">{t("chat.answer3-8")}</p>
      <p>- {t("chat.answer3-9")}</p>
      <p>- {t("chat.answer3-10")}</p>
      <p className="font-black">{t("chat.answer3-11")}</p>
      <p>- {t("chat.answer3-12")}</p>
      <p>- {t("chat.answer3-13")}</p>
      <p className="font-black">{t("chat.answer3-14")}</p>
      <p>- {t("chat.answer3-15")}</p>
      <div className="flex flex-col mt-3 gap-3">
        <a
          href="https://developer-sungjun.tistory.com/"
          className="font-black flex gap-1 text-blue-600"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
          </svg>
          {t("chat.answer3-16")}
        </a>
        <img
          src={`${
            import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
          }1YdVDqn8fWVm27aoUlxq1NHtJsvjwpgsv`}
          alt="search_blog"
          onClick={() => {
            setImageUrl(
              `${
                import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
              }1YdVDqn8fWVm27aoUlxq1NHtJsvjwpgsv`
            );
            setOpenImagePreview(true);
          }}
        />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";

export default function ChatHeader() {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguageStore();
  const [showBubbleGuide, setShowBubbleGuide] = useState(false);

  /* 언어 변경 시 i18n language도 변경 */
  useEffect(() => {
    i18n.changeLanguage(language);
    sessionStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    if (language === "ko") {
      setShowBubbleGuide(true);
    }
  }, []);

  return (
    <header className="relative w-full h-14 bg-white  shadow-sm flex items-center justify-center text-lg">
      {/* 뒤로가기
      <button
        className="cursor-pointer absolute left-3"
        onClick={() => handleBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="gray"
          className="w-5 h-5 "
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
      */}
      {t("common.portfolioTItle")}
      {/* 언어 ico */}
      <button
        onClick={toggleLanguage}
        className="absolute right-4 cursor-pointer flex gap-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 "
          viewBox="0 0 16 16"
        >
          <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
          <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
        </svg>
        <span>{language === "ko" ? "한" : "A"}</span>
      </button>
      {showBubbleGuide && (
        <div className="bubbleGuide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-blue-500"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
          </svg>
          We offer English translation services.
        </div>
      )}
    </header>
  );
}

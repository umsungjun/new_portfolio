import { useTranslation } from "react-i18next";
import { useImagePreviewStore } from "../../../../../store/useImagePreviewStore";

export default function Answer5() {
  const { setImageUrl, setOpenImagePreview } = useImagePreviewStore();
  const { t } = useTranslation();

  return (
    <div className="answer">
      <p className="font-black">{t("chat.question5-3")}</p>
      <p className="font-black">{t("chat.question5-1")}</p>
      <p>{t("chat.question5-4")}</p>
      <div className="mt-3 flex flex-col items-center gap-2">
        <img
          src={`${
            import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
          }11c9RkAEBhHRJvMHjEVgeP0QRE347en83`}
          alt="crossBrowsing_img"
          onClick={() => {
            setImageUrl(
              `${
                import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
              }11c9RkAEBhHRJvMHjEVgeP0QRE347en83&sz=w1000`
            );
            setOpenImagePreview(true);
          }}
        />
        <span className="text-sm text-gray-500 text-center">
          {t("chat.question5-5")}
          {t("common.imgTouch")}
        </span>
      </div>
      <p className="mt-3 font-black">{t("chat.question5-2")}</p>
      <p>{t("chat.question5-6")}</p>
      <div className="bg-white rounded-md text-sm p-2">
        <p className="text-gray-500">/* css */</p>
        <p>{`#viewContainer {`}</p>
        <p className="pl-2">{`height: 100vh;`}</p>
        <p className="pl-2">{`height: calc(var(--vh, 1vh) * 100);`}</p>
        <p>{`}`}</p>
        <p className="text-gray-500 mt-2">/* main.tsx */</p>
        <p>{`useEffect(() => {`}</p>
        <p className="pl-2">{`const resizeListener = () => {`}</p>
        <p className="pl-4">{`const vh = window.innerHeight * 0.01;`}</p>
        <p className="pl-4">{`document.documentElement.style.setProperty('--vh', ${"vh"}px);`}</p>
        <p className="pl-2">{`};`}</p>
        <p className="my-3">{`resizeListener();`}</p>
        <p className="pl-2">{`window.addEventListener('resize', resizeListener);`}</p>
        <p className="pl-2">{`return () => {`}</p>
        <p className="pl-4">{`window.removeEventListener('resize', resizeListener);`}</p>
        <p className="pl-2">{`};`}</p>
        <p>{`}, []);`}</p>
      </div>
      <p className="font-black mt-3">{t("chat.question5-7")}</p>
      <p className="font-black">{t("chat.question5-1")}</p>
      <p>{t("chat.question5-8")}</p>
      <div className="mt-3 flex flex-col items-center gap-2">
        <img
          src={`${
            import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
          }10w0IoZz1iCmzv5ugJZrTud1KvgS1zL5s`}
          alt="crossBrowsing_img"
          onClick={() => {
            setImageUrl(
              `${
                import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
              }10w0IoZz1iCmzv5ugJZrTud1KvgS1zL5s&sz=w1000`
            );
            setOpenImagePreview(true);
          }}
        />
        <span className="text-sm text-gray-500 text-center">
          {t("chat.question5-9")}
          {t("common.imgTouch")}
        </span>
      </div>
      <p className="mt-3 font-black">{t("chat.question5-2")}</p>
      <p>{t("chat.question5-10")}</p>
    </div>
  );
}

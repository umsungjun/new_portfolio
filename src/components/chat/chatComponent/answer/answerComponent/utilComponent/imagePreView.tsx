import { useEffect } from "react";
import { useImagePreviewStore } from "../../../../../../store/useImagePreviewStore";

export default function ImagePreView() {
  const { imageUrl, setOpenImagePreview, setImageUrl } = useImagePreviewStore();

  const handleClose = () => {
    setOpenImagePreview(false);
    setImageUrl(null);
  };

  useEffect(() => {
    const escKeyModalClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);

  return (
    <div className="fixed z-10 web:w-1/2 w-4/5 max-h-[50vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  max-w-11/12 bg-white p-2 pt-8 rounded-lg shadow-md flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-4 h-4 absolute top-2 right-2 cursor-pointer font-extrabold"
        viewBox="0 0 16 16"
        onClick={handleClose}
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
      </svg>
      <img
        src={imageUrl!}
        alt="img_preview"
        className="w-full object-contain rounded-lg"
      />
    </div>
  );
}

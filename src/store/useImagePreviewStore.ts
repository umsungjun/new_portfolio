import { create } from "zustand";

type useImagePreviewStore = {
  isOpenImagePreview: boolean;
  imageUrl: string | null;
  setOpenImagePreview: (isOpenImagePreview: boolean) => void;
  setImageUrl: (imageUrl: string | null) => void;
};

export const useImagePreviewStore = create<useImagePreviewStore>((set) => ({
  isOpenImagePreview: false,
  imageUrl: null,
  setOpenImagePreview: (isOpenImagePreview) => set({ isOpenImagePreview }),
  setImageUrl: (imageUrl) => set({ imageUrl }),
}));

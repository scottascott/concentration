import { create } from "zustand";
import { combine } from "zustand/middleware";

const useToggleProcess = create(
  combine({ isProcessing: false }, (set) => ({
    toggle: (by: boolean) => set((state) => ({ isProcessing: by })),
  }))
);

export default useToggleProcess

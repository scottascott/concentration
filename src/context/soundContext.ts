import { createContext, ReactNode, useContext, useState } from "react";
type SoundContextType = {
  sound: boolean;
  setSound: (sound: boolean) => void;
};
const SoundContextDefaultValues: SoundContextType = {
  sound: true,
  setSound: (sound: boolean) => {},
};
const SoundContext = createContext<SoundContextType>(SoundContextDefaultValues);
export default SoundContext;
export function useSound() {
  return useContext(SoundContext);
}

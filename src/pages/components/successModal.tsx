interface Props {
  steps: number;
  onPlayAgain: () => void;
  onChangeTheme: () => void;
}

export default function SuccessModal(props: Props) {
  const { steps, onPlayAgain, onChangeTheme } = props;
  return (
    <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-black/[.45]">
      <div className="menu text-center">
        <h4 className="mb-[12px] font-bold uppercase text-white drop-shadow-[3px_3px_0_rgba(0,0,0)]">
          You Found Them All!
        </h4>
        <p className="mb-[12px] text-white drop-shadow-[3px_3px_0_rgba(0,0,0)]">
          Finished in <span className="font-bold">{steps}</span> steps
        </p>
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onChangeTheme}>Change Theme</button>
      </div>
    </div>
  );
}

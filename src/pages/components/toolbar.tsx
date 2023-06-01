import Spline from "@splinetool/react-spline";

interface Props {
  openMenu: () => void;
}
export default function ToolBar(props: Props) {
  const { openMenu } = props;
  return (
    <div className="flex h-[140px] w-full origin-top scale-50 justify-center pb-[20px] sm:scale-100 sm:gap-x-20">
      {/* tip */}
      <div className="w-[120px] cursor-pointer">
        <Spline scene="/assets/tip.splinecode" />
      </div>
      {/* rank */}
      <div className="w-[120px] cursor-pointer">
        <Spline scene="/assets/ranking.splinecode" />
      </div>
      {/* audio */}
      <div className="w-[120px] cursor-pointer">
        <Spline scene="/assets/audio.splinecode" />
      </div>
      {/* theme */}
      <div className="w-[120px] cursor-pointer">
        <Spline onClick={openMenu} scene="/assets/theme.splinecode" />
      </div>
    </div>
  );
}

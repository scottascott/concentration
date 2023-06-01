import Spline from "@splinetool/react-spline";

interface Props {
  openMenu: () => void;
}
export default function ToolBar(props: Props) {
  const { openMenu } = props;
  return (
    <div className="flex h-[140px] w-full justify-center sm:gap-x-20 pb-[20px]">
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

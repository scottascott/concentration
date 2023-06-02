import Spline from "@splinetool/react-spline";
import { Tooltip } from "antd";

interface Props {
  openMenu: () => void;
}
export default function ToolBar(props: Props) {
  const { openMenu } = props;
  return (
    <div className="flex h-[140px] w-full origin-top scale-50 justify-center pb-[20px] sm:scale-100 sm:gap-x-20">
      {/* tip */}
      <Tooltip title="Guide" color={"#a855f7"}>
        <div className="w-[120px] cursor-pointer">
          <Spline scene="/assets/tip.splinecode" />
        </div>
      </Tooltip>
      {/* rank */}
      {/* <Tooltip title="Ranking List" color={"#a855f7"}>
        <div className="w-[120px] cursor-pointer">
          <Spline scene="/assets/ranking.splinecode" />
        </div>
      </Tooltip> */}
      {/* audio */}
      <Tooltip title="Audio" color={"#a855f7"}>
        <div className="w-[120px] cursor-pointer">
          <Spline scene="/assets/audio.splinecode" />
        </div>
      </Tooltip>
      {/* theme */}
      <Tooltip title="Theme" color={"#a855f7"}>
        <div className="w-[120px] cursor-pointer">
          <Spline onClick={openMenu} scene="/assets/theme.splinecode" />
        </div>
      </Tooltip>
    </div>
  );
}

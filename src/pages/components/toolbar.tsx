interface Props {
  openMenu: () => void;
}
export default function ToolBar(props: Props) {
  const { openMenu } = props;
  return (
    <div className="flex w-full items-center  justify-center pb-[20px]">
      <div
        className="h-[100px] w-[100px] cursor-pointer bg-slate-500 p-[30px] text-white"
        onClick={openMenu}
      >
        new game
      </div>
      <div className="cube cursor-pointer">
        <a></a>
      </div>
    </div>
  );
}

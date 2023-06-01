interface Props {
  closeMenu: () => void;
  chooseCardType: (c: number) => void;
  isOpen: boolean;
}
const Menu = (props: Props) => {
  const { isOpen, closeMenu, chooseCardType } = props;
  // card type
  const Menu1 = (
    <>
      <div className="menu">
        <h4 className="mb-[12px] font-bold uppercase text-white drop-shadow-[3px_3px_0_rgba(0,0,0)]">
          Choose Card Type
        </h4>
        <button onClick={()=>chooseCardType(0)}>world</button>
        <button onClick={()=>chooseCardType(1)}>dilicious</button>
        <button onClick={()=>chooseCardType(2)}>fresh</button>
        <button onClick={()=>chooseCardType(3)}>wild</button>
        <button className="bg-gray-200" onClick={closeMenu}>
          Cancel
        </button>
      </div>
    </>
  );
  const Menu2 = (
    <>
      <div className="menu">
        <button>New </button>
        <button>Start2</button>
        <button>Start2</button>
      </div>
    </>
  );
  if (isOpen)
    return (
      <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-black/[.45]">
        {Menu1}
      </div>
    );
  else return <></>;
};
export default Menu;

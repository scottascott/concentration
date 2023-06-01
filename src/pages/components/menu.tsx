interface Props {
  closeMenu: () => void;
  chooseCardType: (c: number) => void;
  isOpen: boolean;
  type: number;
}
const Menu = (props: Props) => {
  const { isOpen, closeMenu, chooseCardType, type } = props;
  // card type
  const Menu1 = (
    <>
      <div className="menu">
        <h4 className="mb-[12px] font-bold uppercase text-white drop-shadow-[3px_3px_0_rgba(0,0,0)]">
          Choose Card Type
        </h4>
        {type > 0 && <button onClick={() => chooseCardType(0)}>world</button>}
        {type != 1 && (
          <button onClick={() => chooseCardType(1)}>dilicious</button>
        )}
        {type != 2 && <button onClick={() => chooseCardType(2)}>fresh</button>}
        {type != 3 && <button onClick={() => chooseCardType(3)}>wild</button>}
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

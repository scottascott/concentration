import Spline from "@splinetool/react-spline";

export default function Title() {
  return (
    <>
      {/* pc */}
      <div className="hidden sm:block w-fit mx-auto h-[200px]">
        <Spline scene="/assets/title.splinecode" />
      </div>
      {/* mobile */}
      <div className="w-full sm:hidden">
        <img src="/assets/title.png" alt="header"/>
      </div>
    </>
  );
}

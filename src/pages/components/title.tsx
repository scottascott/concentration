import dynamic from "next/dynamic";
import Image from "next/image";
import useIsDesktop from "~/hooks/useIsDesktop";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Title() {
  const isDesktop = useIsDesktop();

  if (isDesktop === null) return <div className="h-[200px] w-full" />;

  if (isDesktop)
    return (
      <div className="mx-auto h-[200px] w-fit">
        <Spline scene="/assets/title.splinecode" />
      </div>
    );

  return (
    <div className="w-full">
      <Image
        src="/assets/title.png"
        alt="header"
        width={738}
        height={207}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}

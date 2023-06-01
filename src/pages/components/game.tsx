import worldSet from "./cardsSet/world";
import deliciousSet from "./cardsSet/delicious";
import freshSet from "./cardsSet/fresh";
import wildSet from "./cardsSet/wild";
import Card from "./card";

export default function Game() {
  return (
    <div className="rounded-lg py-[100px] shadow-lg">
      {/* cards */}
      <div className="mx-auto grid grid-cols-6 gap-8 w-fit">
        <Card />
      </div>
    </div>
  );
}

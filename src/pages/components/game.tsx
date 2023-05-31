import worldSet from "./cardsSet/world";
import deliciousSet from "./cardsSet/delicious";
import freshSet from "./cardsSet/fresh";
import wildSet from "./cardsSet/wild";
import Card from "./card";

export default function Game() {
  //   <span>&#128303;</span> back
  return (
    <div className="rounded-lg border-4 border-solid border-indigo-500 p-[50px] shadow-lg">
      <Card/>
    </div>
  );
}

import worldSet from "./cardsSet/world";
import deliciousSet from "./cardsSet/delicious";
import freshSet from "./cardsSet/fresh";
import wildSet from "./cardsSet/wild";

export default function Game() {
  //   <span>&#128303;</span> back
  return (
    <div className="rounded-lg border-2 border-dotted border-indigo-500 p-[50px]">
      <p>
        {worldSet.map((card) => {
          return <>{card.content}</>;
        })}
      </p>
      <p>
        {deliciousSet.map((card) => {
          return <>{card.content}</>;
        })}
      </p>
      <p>
        {freshSet.map((card) => {
          return <>{card.content}</>;
        })}
      </p>
      <p>
        {wildSet.map((card) => {
          return <>{card.content}</>;
        })}
      </p>
    </div>
  );
}

import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Banann", "Test", "Test2"];
  const fruits = [
    {
      id: 1,
      name: "Apple",
      price: 10,
      soldout: false,
    },
    {
      id: 2,
      name: "Banana",
      price: 11,
      soldout: true,
    },
    {
      id: 3,
      name: "Test",
      price: 12,
      soldout: true,
    },
    {
      id: 4,
      name: "Test2",
      price: 13,
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}

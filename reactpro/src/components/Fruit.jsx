export default function Fruit({ fruit }) {
  return (
    <>
      <li key={fruit.id}>
        {fruit.name} {fruit.price}  {fruit.soldout ? "soldout" : ""}
      </li>
    </>
  );
}

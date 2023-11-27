export default function Message() {
  function hadleClick() {
    console.log('clicked')
  }
  return (
    <div>
      <button onClick={hadleClick}>Click it!</button>
    </div>
  );
}

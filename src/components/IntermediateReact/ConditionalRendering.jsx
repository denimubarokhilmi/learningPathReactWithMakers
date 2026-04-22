function ConditionalRendering() {
  return (
    <div className="conditional-rendering">
      <PackingList></PackingList>
    </div>
  );
}

function Items(props) {
  const { name, isPacked } = props;

  return <li className="item">{isPacked ? `${name} ✅` : name}</li>;
}

function PackingList() {
  return (
    <>
      <h5>Sally Ride's packing list</h5>
      <ul>
        <Items isPacked={true} name="space suit"></Items>
        <Items isPacked={false} name="apple"></Items>
      </ul>
    </>
  );
}
export default ConditionalRendering;

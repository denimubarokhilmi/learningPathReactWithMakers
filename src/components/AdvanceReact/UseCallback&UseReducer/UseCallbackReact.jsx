import { useCallback, useState } from "react";

function ChildComp(props) {
  const { onClicks } = props;
  console.log("ok");
  return <button onClick={onClicks}>child</button>;
}

export default function ExampleUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    // setCount(count + 1);
    console.log("handle clicked");
  });

  return (
    <div className="example-use-useCallback">
      <h2
        style={{
          marginTop: "40px",
        }}
      >
        usage UseCallback :
      </h2>
      <p>Count : {count}</p>
      <button onClick={(e) => setCount(count + 1)}>count</button>
      <ChildComp onClicks={handleClick}></ChildComp>
    </div>
  );
}
